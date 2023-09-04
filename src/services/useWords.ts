import { useWordsStore } from '@/stores/words'

const useWords = () => {
  const { allWords, chooseWord, availableLetters } = useWordsStore()
  return { chooseWord, allWords, availableLetters }
}

export default useWords
