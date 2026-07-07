-- Cria tabela para armazenar resultados do Quiz
-- Execute este SQL no SQL Editor do Supabase (ou via psql)

-- Necessário para gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  quiz_id text NOT NULL,
  correct integer NOT NULL,
  total integer NOT NULL,
  percentage integer NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
  -- garante consistência entre acertos e total
  CONSTRAINT chk_correct_total CHECK (correct >= 0 AND total > 0 AND correct <= total),
  created_at timestamp with time zone DEFAULT now()
);

-- Índices úteis
CREATE INDEX IF NOT EXISTS idx_quiz_results_quiz_id ON public.quiz_results (quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_percentage ON public.quiz_results (percentage DESC);

-- Segurança RLS (Row Level Security) - CRÍTICO
-- Habilita o RLS na tabela para evitar acesso irrestrito
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Remove políticas antigas se existirem (para reexecução segura)
DROP POLICY IF EXISTS "Permitir leitura publica do ranking" ON public.quiz_results;
DROP POLICY IF EXISTS "Permitir insercao de resultados" ON public.quiz_results;

-- 1. Política de Leitura (SELECT): Permite leitura pública para exibição dos placares e ranking
CREATE POLICY "Permitir leitura publica do ranking" ON public.quiz_results
  FOR SELECT USING (true);

-- 2. Política de Gravação (INSERT): Permite que jogadores enviem seus resultados,
-- garantindo a validação de integridade nos valores enviados
CREATE POLICY "Permitir insercao de resultados" ON public.quiz_results
  FOR INSERT WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0 AND
    correct >= 0 AND total > 0 AND correct <= total AND
    percentage >= 0 AND percentage <= 100
  );
