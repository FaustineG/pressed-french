import { ref } from 'vue'
import { defineStore } from 'pinia'

const useScoreStore = defineStore('score', () => {
  const score = ref(0)
  const highScore = ref(parseInt(localStorage.getItem('high-score') ?? '0'))

  const findWord = (wordLength: number) => {
    score.value += wordLength

    if (score.value > highScore.value) {
      localStorage.setItem('high-score', score.value.toString())
      highScore.value = score.value
    }
  }

  const resetScore = () => {
    score.value = 0
  }

  return { score, findWord, resetScore, highScore }
})
export default useScoreStore
