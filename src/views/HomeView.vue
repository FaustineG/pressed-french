<script setup lang="ts">
import GuessInput from '@/components/GuessInput.vue'
import Word from '@/components/Word.vue'
import useWords from '@/services/useWords'
import { ref } from 'vue'

const { allWords, availableLetters, chooseWord } = useWords()
const currentGuess = ref('')
const wordGuesses = ref(allWords.map((word) => ({ word, visible: false })))

const makeGuess = () => {
  console.log(currentGuess.value)
  const word = wordGuesses.value.find((g) => g.word === currentGuess.value)
  if (word) {
    word.visible = true
  }
  currentGuess.value = ''
}

const giveUp = () => {
  wordGuesses.value.forEach((g) => {
    g.visible = true
  })
}
</script>

<template>
  <main>
    <div v-for="{ word, visible } in wordGuesses" :key="word">
      <Word :word="word" :visible="visible" />
    </div>
    <GuessInput v-model="currentGuess" :availableLetters="availableLetters" @enter="makeGuess" />
    <button @click="makeGuess">ok</button>
    <button @click="giveUp">abandon</button>
  </main>
</template>
