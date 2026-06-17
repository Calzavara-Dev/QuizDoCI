## Visão rápida

Este é um app single-page React + TypeScript (Vite) — um pequeno quiz sobre telefonia. A arquitetura é simples: o componente pai `App.tsx` controla o estado do jogo (start → quiz → results). Componentes principais ficam em `components/` e dados em `data/questions.ts`.

## Arquivos-chave e propósito
- `App.tsx`: Estado global do fluxo do jogo e tipo `ResultData` usado por `Quiz` e `Results`.
- `components/Quiz.tsx`: Lógica do quiz — embaralha perguntas via `getShuffledQuestions()`, controla seleção, atalho de teclado (`window` keydown) e chama `onFinish` com o `ResultData`.
- `components/StartScreen.tsx` e `components/Welcome.tsx`: telas iniciais com botões que disparam `onStart`.
- `components/Results.tsx`: calcula porcentagem, exibe resumo e oferece reinício.
- `data/questions.ts`: fonte canonical das perguntas e função `getShuffledQuestions()` que embaralha opções e ordem das perguntas.
- `types/question.ts`: definição da interface `Question` (shape obrigatório para novas perguntas).

## Fluxo de dados (resumido)
1. Usuário clica em Iniciar (`StartScreen` → chama `App.handleStart`).
2. `App` renderiza `Quiz`, que cria `shuffledQuestions` chamando `getShuffledQuestions()`.
3. Em cada resposta, `Quiz` acumula `answers` e `correct`.
4. Ao finalizar, `Quiz` chama `onFinish({ correct, total, answers })` — `App` guarda em `resultData` e mostra `Results`.

## Convenções específicas deste projeto
- Texto e conteúdo estão em português (pt-BR). Preserve idioma ao criar strings UI.
- UI usa classes utilitárias Tailwind no JSX. Evite alterar classes sem necessidade.
- Animações usam `framer-motion`; ícones vêm de `lucide-react`.
- Tipagem TypeScript é utilizada de ponta a ponta — mantenha e atualize tipos exportados (`ResultData`, `Question`).
- `getShuffledQuestions()` embaralha tanto as `options` quanto a ordem de perguntas — não altere essa função sem validar comportamento de testes manuais.

## Integrações e dependências observadas (verifique package.json)
- Imports identificados: `react`, `react-dom`, `framer-motion`, `lucide-react`, Tailwind CSS (classes utilitárias).  
- Observação: não há `package.json` no workspace fornecido — antes de executar comandos verifique se existe na raiz do repo. Se não existir, o mantenedor provavelmente usa um gerenciador (npm/pnpm/yarn) com Vite.

## Como executar / depurar (assumindo Vite padrão)
Se o repo tiver um `package.json` com scripts padrão Vite, passos típicos (PowerShell):

```powershell
npm install
npm run dev    # inicia servidor de desenvolvimento (hot-reload)
npm run build  # build de produção
npm run preview # preview do build
```

Se os scripts forem diferentes, abra `package.json` e use os scripts existentes. Para checar tipos localmente rode `npx tsc --noEmit` (se `tsconfig.json` existir).

## Boas práticas para edições realizadas por agentes
- Faça pequenas mudanças locais: preserve tipos exportados em `types/` e atualize todos os usos.
- Teste interativamente no navegador (hot-reload do Vite). Observe o atalho de teclado em `Quiz.tsx` — alterações no listener de `window` podem afetar navegação por teclado.
- Ao adicionar perguntas, siga a interface `Question` em `types/question.ts` e adicione ao array `questions` em `data/questions.ts`; evite alterar a semântica de `answer` (string exata corresponde à opção correta).
- Evite mutar diretamente objetos importados; `getShuffledQuestions()` já retorna cópia embaralhada.

## Exemplos rápidos extraídos do código
- Novo item Question (formato):
  { question: "...", options: ["A","B","C","D"], answer: "A" }
- Fluxo de callback: `Quiz` chama `onFinish({ correct, total, answers })` — mantenha essa forma ao refatorar.

## Armadilhas conhecidas / pontos de atenção
- O texto está em PT-BR — strings geradas automaticamente devem respeitar esse idioma.  
- `getShuffledQuestions()` usa Math.random; testes determinísticos precisarão mockar essa função.
- Componentes usam animações com `key={currentIndex}` para trocar entradas; alterar keys muda a animação/estado.

## Se faltar contexto
- Se `package.json` não existir, confirme com o mantenedor qual ferramenta foi usada antes de instalar dependências.  
- Para mudanças maiores (adicionar rotas, persistência, autenticação), peça instruções do mantenedor: o app foi projetado como SPA sem roteamento nem backend.

Por favor, reveja este arquivo e me diga se quer que eu inclua exemplos de PRs, regras de commits, ou padrões de teste/CI específicos.
