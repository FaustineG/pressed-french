import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import words from 'an-array-of-french-words'
import relevantWords from '@/assets/words.json'

export const allSixLetterWords = (relevantWords as string[]).filter((w) => w.length === 6)
export const findAllOtherWords = (relevantWords: string[], mainWord: string) => {
  const allWords = relevantWords.filter((word) => {
    const tempWord = ref(mainWord)
    return word
      .split('')
      .map((letter) => {
        const includesLetter = tempWord.value.includes(letter)
        if (includesLetter) {
          tempWord.value = tempWord.value.replace(letter, '')
        }
        return includesLetter
      })
      .reduce((acc, val) => acc && val, true)
  })

  return allWords.sort((a: string, b: string) => (a.length < b.length ? -1 : 1))
}
export const useWordsStore = defineStore('words', () => {
  const mainWord = ref('')
  const allOtherWords = ref<string[]>([])

  const availableLetters = computed(() => mainWord.value.split('').sort(() => 0.5 - Math.random()))

  const chooseWord = () => {
    const i = Math.floor(Math.random() * allSixLetterWords.length)
    mainWord.value = allSixLetterWords[i]
    allOtherWords.value = findAllOtherWords(relevantWords, mainWord.value)
  }

  return { allWords: allOtherWords, chooseWord, availableLetters }
})
