-- Ativação do Row Level Security (RLS) na tabela quiz_results
-- Execute este script no SQL Editor do painel do Supabase

-- 1. Habilitar RLS na tabela quiz_results
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- 2. Limpar políticas anteriores se existirem
DROP POLICY IF EXISTS "Permitir leitura publica do ranking" ON public.quiz_results;
DROP POLICY IF EXISTS "Permitir insercao de resultados" ON public.quiz_results;

-- 3. Política de Leitura (SELECT): Permite que qualquer usuário veja o ranking e placares
CREATE POLICY "Permitir leitura publica do ranking" ON public.quiz_results
  FOR SELECT USING (true);

-- 4. Política de Inserção (INSERT): Permite que jogadores salvem seus resultados,
-- validando a integridade dos dados enviados
CREATE POLICY "Permitir insercao de resultados" ON public.quiz_results
  FOR INSERT WITH CHECK (
    name IS NOT NULL AND length(trim(name)) > 0 AND
    correct >= 0 AND total > 0 AND correct <= total AND
    percentage >= 0 AND percentage <= 100
  );
