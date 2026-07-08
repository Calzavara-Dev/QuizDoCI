-- ==============================================================================
-- SCHEMA PARA BANCO DE DADOS SUPABASE: QUIZ DO CI (QUESTÕES)
-- Execute este script no Editor SQL do seu projeto Supabase
-- ==============================================================================

-- 1. Criar a tabela de questões do Quiz
CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  quiz_id TEXT NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Índice para consultas rápidas por módulo (ex: quiz_id = 'telefonia')
CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz_id ON public.quiz_questions(quiz_id);

-- 3. Habilitar RLS (Row Level Security)
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;

-- 4. Política para leitura pública (qualquer aluno/app pode ler as questões)
CREATE POLICY "Permitir leitura pública das questões"
ON public.quiz_questions
FOR SELECT
TO public, anon
USING (true);

-- 5. Política para inserção e atualização (painel Admin ou requisições autenticadas/anônimas permitidas)
CREATE POLICY "Permitir inserção de questões pelo Admin"
ON public.quiz_questions
FOR INSERT
TO public, anon
WITH CHECK (true);

CREATE POLICY "Permitir atualização de questões pelo Admin"
ON public.quiz_questions
FOR UPDATE
TO public, anon
USING (true)
WITH CHECK (true);

CREATE POLICY "Permitir remoção de questões pelo Admin"
ON public.quiz_questions
FOR DELETE
TO public, anon
USING (true);

-- ==============================================================================
-- Fim do Script
-- ==============================================================================
