# Mobile build (Android + iOS)

Este projeto é uma aplicação web (Vite + React + TypeScript). Para empacotar como apps nativos usamos Capacitor.

Notes
- Para publicar no Google Play, gere um signed AAB pelo Android Studio.
- Se preferir usar Capacitor programaticamente, consulte https://capacitorjs.com/docs.
npm run build:web

# Copia os ativos para plataformas e abre Android Studio
npm run build:android

# Copia os ativos para plataformas e abre Xcode (macOS)
npm run build:ios
```

Notas
- No macOS, abra o Xcode e configure assinaturas (signing) para gerar um IPA.
- Para publicar no Google Play, gere um signed AAB pelo Android Studio.
- Se preferir usar Capacitor programaticamente, consulte https://capacitorjs.com/docs.

iOS (gerar .ipa) - requisitos
- macOS com Xcode instalado
- Conta Apple Developer (para distribuição) — para testes ad-hoc, um certificado/developer provisioning profile é necessário

Opções para gerar um .ipa (macOS)

1) Script simples (recomendado se souber usar Xcode):

```bash
# No macOS, a partir da raiz do projeto
./scripts/build-ios.sh
```

Antes de executar, copie o arquivo de exemplo `scripts/ExportOptions.plist.template` para `scripts/ExportOptions.plist` e ajuste `teamID` e `method` conforme necessário.

2) Fastlane (automação):

Instale o fastlane no macOS e configure `FASTLANE_TEAM_ID`/Apple ID:

```bash
gem install fastlane
export FASTLANE_TEAM_ID=YOUR_TEAM_ID
fastlane ios build_ipa
```

Notas finais
- O script `build-ios.sh` e o Fastlane usam o workspace em `ios/App/App.xcworkspace` criado pelo Capacitor. Se você ainda não adicionou a plataforma iOS, execute `npx cap add ios` em um macOS.
- A configuração de signing normalmente é feita no Xcode (Targets → Signing & Capabilities). Configure team e provisioning profiles antes de gerar o IPA.

