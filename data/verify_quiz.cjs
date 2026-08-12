const fs = require('fs');
const path = require('path');

// Read the typescript file directly. We can evaluate it since it's just an array of objects.
// Wait, evaluating TS is hard. Let's just use a regex or transpile it, or even better, parse it manually.
// Actually, I can use simple text extraction, but it's safer to load it as a module if we strip the TS types.

const targetFile = path.join(__dirname, 'anemometros.ts');
let fileContent = fs.readFileSync(targetFile, 'utf8');

// Strip out TS specific stuff
fileContent = fileContent.replace('import type { Question } from "../types/question";', '');
fileContent = fileContent.replace('export const anemometrosQuestions: Question[] = ', 'module.exports = ');

const tempFile = path.join(__dirname, 'temp_validate.cjs');
fs.writeFileSync(tempFile, fileContent, 'utf8');

const questions = require('./temp_validate.cjs');

let errors = [];

questions.forEach((q, index) => {
    // 1. Check if answer is in options
    if (!q.options.includes(q.answer)) {
        errors.push(`Question ${index + 1}: Answer "${q.answer}" is NOT in options array: [${q.options.join(', ')}]`);
    }

    // 2. Check for duplicate options
    const uniqueOptions = new Set(q.options);
    if (uniqueOptions.size !== q.options.length) {
        errors.push(`Question ${index + 1}: Contains duplicate options: [${q.options.join(' | ')}]`);
    }

    // 3. Check for undefined/null/empty
    q.options.forEach(opt => {
        if (!opt || opt.trim() === '') {
            errors.push(`Question ${index + 1}: Contains empty or falsy option.`);
        }
    });
});

if (errors.length === 0) {
    console.log("No structural errors found! All questions have the correct answer in their options and no duplicates.");
} else {
    console.log(`Found ${errors.length} errors:`);
    errors.forEach(e => console.log(e));
}

// Cleanup
fs.unlinkSync(tempFile);
