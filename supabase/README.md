Supabase — configuração rápida para o Quiz
=========================================

1) Criar tabela
----------------
- Abra o painel do seu projeto no Supabase → SQL Editor → New Query
- Cole o SQL de `init_quiz_results.sql` e execute.

2) RLS / Policies (recomendado)
--------------------------------
- Recomendamos habilitar Row Level Security e criar políticas que permitam apenas
  usuários autenticados fazer INSERT (ex.: `TO authenticated`). Se você quiser
  um ranking público, permita SELECT a todos.

Exemplos estão no arquivo `init_quiz_results.sql`.

3) Configurar CORS / Chaves
---------------------------
- Copie a URL do seu projeto e a `anon` key (public) e preencha em `src/.env`:

  VITE_SUPABASE_URL=https://<project-ref>.supabase.co
  VITE_SUPABASE_ANON_KEY=<anon-key>

4) Dependências e rodar localmente
----------------------------------
No diretório `src` rode:

```bash
npm install
npm run dev
```

5) Observações de segurança
---------------------------
- Não comite chaves privadas (service_role) no repositório.
- Para gravação segura via função (ex.: validar payload), use uma Function/Edge Function
  no Supabase com uma chave de serviço, ou implemente validação no backend.
