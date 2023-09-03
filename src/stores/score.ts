import { ref } from 'vue'
import { defineStore } from 'pinia'

const useScoreStore = defineStore('score', () => {
  const score = ref(0)

  const findWord = (wordLength: number) => {
    score.value += wordLength
  }

  const resetScore = ()=>{
    score.value = 0;
  }

  return { score, findWord,resetScore }
})
export default useScoreStore
