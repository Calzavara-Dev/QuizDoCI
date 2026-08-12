const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'anemometros.ts');
const fileContent = fs.readFileSync(targetFile, 'utf8');

const questions = [];
const qRegex = /"question":\s*"([^"]+)"/g;
let match;
while ((match = qRegex.exec(fileContent)) !== null) {
    questions.push({ original: match[1], index: questions.length + 1 });
}

const getWords = (text) => new Set(text.toLowerCase().replace(/[^a-z0-9à-ú\s]/gi, '').split(/\s+/).filter(w => w.length > 2));

function calculateJaccardSimilarity(set1, set2) {
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return union.size === 0 ? 0 : intersection.size / union.size;
}

const similarQuestions = [];

for (let i = 0; i < questions.length; i++) {
    const q1 = questions[i];
    const words1 = getWords(q1.original);

    for (let j = i + 1; j < questions.length; j++) {
        const q2 = questions[j];
        const words2 = getWords(q2.original);

        const sim = calculateJaccardSimilarity(words1, words2);

        if (sim > 0.65) {
            similarQuestions.push({ q1, q2, similarity: sim });
        }
    }
}

similarQuestions.sort((a, b) => b.similarity - a.similarity);

console.log(`Encontradas ${similarQuestions.length} questões similares (>65%):`);
similarQuestions.forEach(pair => {
    console.log(`[${(pair.similarity * 100).toFixed(1)}%]`);
    console.log(`Q${pair.q1.index}: ${pair.q1.original}`);
    console.log(`Q${pair.q2.index}: ${pair.q2.original}\n`);
});
