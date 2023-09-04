const fs = require('fs');

const words = fs.readFileSync('src/assets/all-words.txt', 'utf-8');

const wordsArray = words.split(' ').filter(w => w.length <=6  && w.length >=3).map(w => w.toLowerCase());
console.log(wordsArray.length)

fs.writeFileSync('src/assets/words.txt', JSON.stringify(wordsArray))