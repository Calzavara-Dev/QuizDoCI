const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'anemometros.ts');
const fileContent = fs.readFileSync(targetFile, 'utf8');

// Simple parser to extract questions
const questions = [];
const regex = /question:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(fileContent)) !== null) {
    questions.push(match[1]);
}

const getWords = (text) => new Set(text.toLowerCase().replace(/[^a-z0-9à-ú\s]/gi, '').split(/\s+/).filter(w => w.length > 3));

function calculateJaccardSimilarity(set1, set2) {
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return union.size === 0 ? 0 : intersection.size / union.size;
}

const similarPairs = [];

for (let i = 0; i < questions.length; i++) {
    const words1 = getWords(questions[i]);
    for (let j = i + 1; j < questions.length; j++) {
        const words2 = getWords(questions[j]);
        const sim = calculateJaccardSimilarity(words1, words2);
        
        // Threshold for similarity (e.g., 0.6 means 60% overlap of significant words)
        if (sim > 0.6) {
            similarPairs.push({
                q1: questions[i],
                q2: questions[j],
                similarity: sim
            });
        }
    }
}

similarPairs.sort((a, b) => b.similarity - a.similarity);

if (similarPairs.length === 0) {
    console.log("No similar questions found based on word overlap.");
} else {
    console.log(`Found ${similarPairs.length} pairs of highly similar questions:\n`);
    similarPairs.forEach(pair => {
        console.log(`Similarity: ${(pair.similarity * 100).toFixed(1)}%`);
        console.log(`Q1: ${pair.q1}`);
        console.log(`Q2: ${pair.q2}\n`);
    });
}
