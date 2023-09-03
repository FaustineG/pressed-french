<script setup lang="ts">
import GuessInput from '@/components/GuessInput.vue'
import Word from '@/components/Word.vue'
import useWords from '@/services/useWords'
import useScore from '@/services/useScore'
import { computed, ref } from 'vue'

const { allWords, availableLetters } = useWords()
const { score, findWord } = useScore()
const currentGuess = ref('')
const wordGuesses = ref(allWords.map((word) => ({ value: word, visible: false, found: false })))

const makeGuess = () => {
  console.log(currentGuess.value)
  const word = wordGuesses.value.find((g) => g.value === currentGuess.value)
  if (word) {
    word.found = true
    word.visible = true
    findWord(word.value.length)
  }
  currentGuess.value = ''
  console.log(score.value)
}

const highScore = computed(() => {
  return localStorage.getItem('high-score')
})

const giveUp = () => {
  wordGuesses.value.forEach((g) => {
    g.visible = true
  })
  if (score.value > parseInt(highScore.value ?? '')) {
    localStorage.setItem('high-score', score.value.toString())
  }
}
</script>

<template>
  <header>
    <p class="score">
      Score :
      {{ score }}
    </p>
    <button @click="giveUp">finir</button>
    <button @click="giveUp">nouvelle partie</button>
    <p class="high-score">
      High score:
      {{ highScore }}
    </p>
  </header>
  <main >
    <div class="words">
      <template v-for="{ value, visible, found } in wordGuesses" :key="value">
        <Word :word="value" :visible="visible" :found="found" />
      </template>
    </div>
  </main>
  <footer>
    <GuessInput v-model="currentGuess" :availableLetters="availableLetters" @enter="makeGuess" />
  </footer>
</template>

<style lang="scss">
main{
  padding:0 2rem;

  .words {
    display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;
  max-height: 70vh;
  padding: 1rem;
}
} 

header {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .score{
    font-size: 3rem;
  }

  .high-score{
    font-size: 2rem;
  }
}


footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
