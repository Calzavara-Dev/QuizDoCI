-- Cria tabela para armazenar resultados dos quizzes
-- Execute este SQL no SQL Editor do Supabase (ou via psql)

CREATE TABLE IF NOT EXISTS public.quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  quiz_id text NOT NULL,
  correct integer NOT NULL,
  total integer NOT NULL,
  percentage integer NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Índices úteis
CREATE INDEX IF NOT EXISTS idx_quiz_results_quiz_id ON public.quiz_results (quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_percentage ON public.quiz_results (percentage DESC);

-- Example RLS policies
-- RECOMENDADO: habilitar RLS e permitir apenas usuários autenticados inserirem resultados
-- Habilitar RLS:
-- ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção apenas para usuários autenticados:
-- CREATE POLICY "Allow authenticated inserts" ON public.quiz_results
--   FOR INSERT
--   TO authenticated
--   WITH (true);

-- Se quiser permitir leitura pública (por exemplo para ranking público):
-- CREATE POLICY "Allow public select" ON public.quiz_results
--   FOR SELECT
--   USING (true);

-- ATENÇÃO: Se optar por permitir INSERT para anon (pubblico), isso permite qualquer pessoa
-- gravar resultados. Use com cautela. Exemplo (não recomendado sem validação adicional):
-- CREATE POLICY "Allow public insert" ON public.quiz_results
--   FOR INSERT
--   USING (true);

-- Se seu projeto usar Regras RLS avançadas, crie policies que validem o conteúdo ou
-- verifiquem claims do JWT antes de permitir escrita.
