const fs = require('fs')
const _ = require('lodash')

const words = fs.readFileSync('./all-words.txt', 'utf-8')

const wordsArray = words
  .split(' ')
  .filter((w) => w.length <= 6 && w.length >= 3)
  .map((w) => w.toLowerCase())
const uniqueWords = _.uniq(wordsArray)
console.log(uniqueWords.length)

fs.writeFileSync('./words.txt', JSON.stringify(uniqueWords))
