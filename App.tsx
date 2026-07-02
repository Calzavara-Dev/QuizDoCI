import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StartScreen } from "./components/StartScreen";
import { Quiz } from "./components/Quiz";
import { Results } from "./components/Results";
import { QuizList } from "./components/QuizList";
import { Ranking } from "./components/Ranking";
import { addQuizResult, loadRankings, type Rankings } from "./utils/rankings";

export interface ResultData {
  correct: number;
  total: number;
  quizId?: string;
  answers: {
    question: string;
    isCorrect: boolean;
    userAnswer: string;
    correctAnswer: string;
  }[];
}

type GameState = "start" | "select" | "quiz" | "results" | "ranking";

export default function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<string>("telefonia");
  const [rankings, setRankings] = useState<Rankings>(() => loadRankings());

  const handleStart = (quizId?: string) => {
    if (quizId) setSelectedQuiz(quizId);
    setGameState("quiz");
  };

  const openSelector = () => setGameState("select");

  const openRanking = () => setGameState("ranking");

  const handleSelect = (quizId: string) => {
    setSelectedQuiz(quizId);
    setGameState("quiz");
  };

  const handleFinish = (data: ResultData) => {
    const resultWithQuiz = { ...data, quizId: selectedQuiz };
    const nextRankings = addQuizResult(resultWithQuiz);
    setRankings(nextRankings);
    setResultData(resultWithQuiz);
    setGameState("results");
  };

  const handleRestart = () => {
    setResultData(null);
    setGameState("start");
  };

  const handleBackToStart = () => {
    setResultData(null);
    setGameState("start");
  };


  return (
    <div className="app-container bg-app">
      <AnimatePresence mode="wait">
        {gameState === "start" && (
          <StartScreen key="start" rankings={rankings} selectedQuiz={selectedQuiz} onStart={handleStart} onOpenSelector={openSelector} onOpenRanking={openRanking} />
        )}
        {gameState === "select" && (
          <QuizList key="select" onSelect={handleSelect} onBack={() => setGameState("start")} />
        )}
        {gameState === "ranking" && (
          <Ranking key="ranking" rankings={rankings} selectedQuiz={selectedQuiz} onBack={() => setGameState("start")} />
        )}
        {gameState === "quiz" && (
          <Quiz key={selectedQuiz} quizId={selectedQuiz} onFinish={handleFinish} onBackToStart={handleBackToStart} />
        )}
        {gameState === "results" && resultData && (
          <Results
            key="results"
            data={resultData}
            rankings={rankings}
            onRestart={handleRestart}
            onBackToStart={handleBackToStart}
          />
        )}
        
      </AnimatePresence>
      <footer className="w-full mt-auto p-4 text-center text-slate-400 text-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 muted">
          <span>© 3SG-CI CALZAVARA</span>
          <span className="text-slate-600">•</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}