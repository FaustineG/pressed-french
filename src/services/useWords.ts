import { useWordsStore } from '@/stores/words'

const useWords = () => {
  const { allWords, chooseWord, availableLetters } = useWordsStore()
  // const allSixLetterWords = (words as string[]).filter((w) => w.length === 6)
  // const currentWord = ref('')
  // const allOtherWords = ref<string[]>([])

  // const relevantWords = (words as string[]).filter(
  //   (w) => w.length > 2 && w.length < 6 && !w.includes('-')
  // )

  // const allWords = computed(() => [currentWord.value, ...allOtherWords.value])

  // const findAllOtherWords = (currentWord: string) => {
  //   const allWords = relevantWords.filter((word) => {
  //     const tempWord = ref(currentWord)
  //     return word
  //       .split('')
  //       .map((letter) => {
  //         const includesLetter = tempWord.value.includes(letter)
  //         if (includesLetter) {
  //           tempWord.value = tempWord.value.replace(letter, '')
  //         }
  //         return includesLetter
  //       })
  //       .reduce((acc, val) => acc && val, true)
  //   })

  //   return allWords.sort((a: string, b: string) => (a.length < b.length ? -1 : 1))
  // }
  // const chooseWord = () => {
  //   const i = Math.floor(Math.random() * allSixLetterWords.length)
  //   currentWord.value = allSixLetterWords[i]
  //   allOtherWords.value = findAllOtherWords(currentWord.value)
  // }

  return { chooseWord, allWords, availableLetters }
}

export default useWords
