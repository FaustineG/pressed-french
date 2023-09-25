<script setup lang="ts">
import GuessInput from '@/components/GuessInput.vue'
import Word from '@/components/Word.vue'
import useWords from '@/services/useWords'
import useScore from '@/services/useScore'
import { ref } from 'vue'

const { allWords, availableLetters } = useWords()
const { score, findWord, highScore } = useScore()
const currentGuess = ref('')
const wordGuesses = ref(allWords.map((word) => ({ value: word, visible: false, found: false })))

const makeGuess = () => {
  const word = wordGuesses.value.find((g) => g.value === currentGuess.value)
  if (word) {
    word.found = true
    word.visible = true
    findWord(word.value.length)
  }
  currentGuess.value = ''
}

const giveUp = () => {
  wordGuesses.value.forEach((g) => {
    g.visible = true
  })
}

const newGame = () => {
  window.location.reload()
}
</script>

<template>
  <header>
    <p class="score">
      Score :
      {{ score }}
    </p>
    <button @click="giveUp">end</button>
    <button @click="newGame">new</button>
    <p class="high-score">
      High score:
      {{ highScore }}
    </p>
  </header>
  <section class="words">
    <template v-for="{ value, visible, found } in wordGuesses" :key="value">
      <Word :word="value" :visible="visible" :found="found" />
    </template>
  </section>
  <footer>
    <GuessInput v-model="currentGuess" :availableLetters="availableLetters" @enter="makeGuess" />
  </footer>
</template>

<style lang="scss">
.words {
  overflow-x: auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;
  max-height: 70vh;
  padding: 1rem;
  font-variant: small-caps;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .score {
    color: white;
    font-size: 3rem;
  }

  .high-score {
    color: white;
    font-size: 2rem;
  }
}

footer {
  // position: fixed;
  // bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // flex-wrap: wrap;
  // width: 100vw;
}
</style>
