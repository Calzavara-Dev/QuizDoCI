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

console.log(`Found ${questions.length} questions in anemometros.ts.`);

// Find duplicates (exact or near exact)
const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

const normalizedQuestions = questions.map(q => ({ original: q, normalized: normalize(q) }));

const duplicates = [];
const seen = new Map();

for (const q of normalizedQuestions) {
    if (seen.has(q.normalized)) {
        duplicates.push({ original: q.original, duplicateOf: seen.get(q.normalized) });
    } else {
        seen.set(q.normalized, q.original);
    }
}

if (duplicates.length === 0) {
    console.log("No duplicate questions found.");
} else {
    console.log(`Found ${duplicates.length} duplicate questions:`);
    duplicates.forEach((d, i) => {
        console.log(`\nDuplicate ${i + 1}:`);
        console.log(`- ${d.original}`);
        // console.log(`  (matches: ${d.duplicateOf})`);
    });
}
