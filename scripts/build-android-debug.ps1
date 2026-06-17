<#
build-android-debug.ps1

Detecta um JDK (java.exe) no PATH ou em locais comuns, verifica se é Java 17,
configura a variável de ambiente JAVA_HOME para a sessão, atualiza
android/gradle.properties com org.gradle.java.home se desejar, e executa
Gradle assembleDebug usando o gradle wrapper.

Execute no PowerShell a partir da raiz do projeto (onde está src/):
    pwsh -ExecutionPolicy Bypass -File .\scripts\build-android-debug.ps1
Ou, se estiver usando Windows PowerShell:
    powershell -ExecutionPolicy Bypass -File .\scripts\build-android-debug.ps1

#>

Set-StrictMode -Version Latest

function Write-Info($m){ Write-Host "[INFO] $m" -ForegroundColor Cyan }
function Write-Warn($m){ Write-Host "[WARN] $m" -ForegroundColor Yellow }
function Write-Err($m){ Write-Host "[ERROR] $m" -ForegroundColor Red }

# 1) Tentar localizar java.exe via where.exe
$javaPaths = @()
try {
    $javaPaths = & where.exe java 2>$null | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }
} catch {
    # where may throw; ignore
}

if (-not $javaPaths -or $javaPaths.Count -eq 0) {
    Write-Warn "Nenhum 'java' encontrado no PATH. Tentando caminhos comuns..."
    $candidates = @(
        'C:\\Program Files\\Java',
        'C:\\Program Files\\AdoptOpenJDK',
        'C:\\Program Files\\Temurin',
        'C:\\Program Files\\Amazon Corretto',
        'C:\\Program Files\\Zulu',
        'C:\\Program Files\\Microsoft\\jdk',
        'C:\\Program Files\\Android\\Android Studio\\jbr'
    )
    foreach ($p in $candidates) {
        if (Test-Path $p) {
            Get-ChildItem $p -Recurse -Filter java.exe -ErrorAction SilentlyContinue | ForEach-Object { $javaPaths += $_.FullName }
        }
    }
}

if (-not $javaPaths -or $javaPaths.Count -eq 0) {
    Write-Err "Não foi possível localizar um executável 'java' no PATH ou em locais padrão. Instale Temurin/OpenJDK 17 e execute novamente."
    Write-Host "Download: https://adoptium.net/"
    exit 2
}

# Preferir javac se disponível (garante JDK)
$javacPath = $null
try { $javacPath = & where.exe javac 2>$null | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' } | Select-Object -First 1 } catch { }

$selectedJava = $null
if ($javacPath) {
    $selectedJava = $javaPaths | Where-Object { $_ -like "*\$([System.IO.Path]::GetFileName($_))" } | Select-Object -First 1
}
if (-not $selectedJava) { $selectedJava = $javaPaths[0] }

Write-Info "Usando java em: $selectedJava"

# determina JDK home
$binDir = Split-Path -Parent $selectedJava
$jdkHome = Split-Path -Parent $binDir
Write-Info "Interpretando JDK home como: $jdkHome"

# checa versão
$verOut = & $selectedJava -version 2>&1
Write-Info "Saída de java -version:"
$verOut | ForEach-Object { Write-Host "    $_" }

# procura por major 17 no texto
$verText = $verOut -join " `n "
if ($verText -match 'version "(\d+)') {
    $major = [int]$Matches[1]
} else {
    $major = $null
}

if (-not $major) {
    Write-Warn "Não consegui parsear a versão do java. Prosseguirei, mas pode falhar se a versão não for compatível."
} else {
    Write-Info "Versão Java detectada: $major"
}

if ($major -and $major -ge 18) {
    Write-Warn "Versão do Java detectada é $major (>=18). O Gradle do projeto geralmente precisa de Java 17. Recomendo instalar Temurin 17 e reexecutar este script com ele."
    Write-Host "Se quiser prosseguir mesmo assim, pressione Enter. Para abortar, pressione Ctrl+C." -NoNewline
    Read-Host | Out-Null
}

# Exporta para a sessão atual
$Env:JAVA_HOME = $jdkHome
$Env:Path = "$Env:JAVA_HOME\bin;$Env:Path"
Write-Info "JAVA_HOME temporário definido para sessão: $Env:JAVA_HOME"

# Atualiza android/gradle.properties (descomenta e ajusta org.gradle.java.home se houver placeholder)
$gradleProps = Join-Path -Path (Resolve-Path ..) -ChildPath 'android\gradle.properties'
if (-not (Test-Path $gradleProps)) {
    Write-Info "Arquivo android/gradle.properties não existe. Criando com org.gradle.java.home apontando para JDK detectado."
    $content = @()
    $content += "# Gerado por scripts/build-android-debug.ps1"
    $content += "org.gradle.java.home=$jdkHome"
    $content += "org.gradle.jvmargs=-Xmx2048m"
    $content | Out-File -FilePath $gradleProps -Encoding UTF8
} else {
    Write-Info "Arquivo android/gradle.properties existe. Tentando atualizar org.gradle.java.home..."
    $txt = Get-Content $gradleProps -Raw
    if ($txt -match 'org\.gradle\.java\.home\s*=') {
        $new = [Regex]::Replace($txt, 'org\.gradle\.java\.home\s*=.*', "org.gradle.java.home=$jdkHome")
        $new | Out-File -FilePath $gradleProps -Encoding UTF8
        Write-Info "Atualizado org.gradle.java.home no arquivo existente."
    } else {
        # adiciona no final
        Add-Content -Path $gradleProps -Value "`n# Ajustado por build-android-debug.ps1"
        Add-Content -Path $gradleProps -Value "org.gradle.java.home=$jdkHome"
        Write-Info "Adicionado org.gradle.java.home ao final do arquivo gradle.properties."
    }
}

# Executa assembleDebug
Push-Location (Join-Path (Resolve-Path ..) 'android')
try {
    Write-Info "Parando qualquer daemon Gradle em execução..."
    & .\gradlew.bat --stop
    Write-Info "Executando assembleDebug (isso pode demorar)..."
    & .\gradlew.bat assembleDebug
} catch {
    Write-Err "Falha ao executar gradlew: $_"
    exit 3
} finally {
    Pop-Location
}

Write-Info "Se o build concluiu com sucesso, o APK estará em android\\app\\build\\outputs\\apk\\debug\\app-debug.apk"

exit 0
