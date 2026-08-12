const fs = require('fs');
const path = require('path');

const rawText = fs.readFileSync(path.join(__dirname, 'scratch_raw.txt'), 'utf8');
const blocks = rawText.split(/\n\s*\n/);

const questions = [];
const allAnswers = [];

for (const block of blocks) {
  if (!block.trim()) continue;
  
  let enunciado = '';
  let gabarito = '';
  let tema = '';

  const lines = block.split('\n');
  for (const line of lines) {
    if (line.startsWith('Enunciado:')) {
      enunciado = line.replace('Enunciado:', '').trim();
    } else if (line.startsWith('Gabarito:')) {
      gabarito = line.replace('Gabarito:', '').trim();
      if (gabarito) allAnswers.push(gabarito);
    } else if (line.startsWith('Tema Principal:')) {
      tema = line.replace('Tema Principal:', '').trim();
    }
  }

  if (enunciado && gabarito) {
    questions.push({
      question: enunciado,
      answer: gabarito,
      topic: tema
    });
  }
}

// Ensure unique answers for random picking
const uniqueAnswers = [...new Set(allAnswers)];

function getRandomDistractors(correctAnswer, count = 3) {
  const distractors = [];
  let attempts = 0;
  while (distractors.length < count && attempts < 100) {
    const randomAnswer = uniqueAnswers[Math.floor(Math.random() * uniqueAnswers.length)];
    if (randomAnswer !== correctAnswer && !distractors.includes(randomAnswer)) {
      distractors.push(randomAnswer);
    }
    attempts++;
  }
  
  // If we couldn't find enough, add some generic ones
  if (distractors.length < count) {
      const generics = ["Nenhuma das alternativas", "Todas as alternativas", "Falso", "Verdadeiro"];
      for (const gen of generics) {
          if (distractors.length >= count) break;
          if (!distractors.includes(gen) && correctAnswer !== gen) {
              distractors.push(gen);
          }
      }
  }
  return distractors;
}

const finalOutput = `import type { Question } from "../types/question";

export const anemometrosQuestions: Question[] = [
${questions.map(q => {
  const distractors = getRandomDistractors(q.answer);
  // Insert correct answer at a random position, or just put it first. 
  // The shuffleArray function in questions.ts will shuffle options anyway.
  const options = [q.answer, ...distractors];
  
  return `  {
    question: ${JSON.stringify(q.question)},
    options: ${JSON.stringify(options)},
    answer: ${JSON.stringify(q.answer)},
    topic: ${JSON.stringify(q.topic)}
  }`;
}).join(',\n')}
];
`;

fs.writeFileSync(path.join(__dirname, 'anemometros.ts'), finalOutput, 'utf8');
console.log('Successfully generated anemometros.ts with ' + questions.length + ' questions.');
