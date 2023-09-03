<script setup lang="ts">
import useWords from './services/useWords'
import { onMounted } from 'vue'
import useScoreStore from './stores/score'

const { chooseWord } = useWords()
const { resetScore } = useScoreStore()

onMounted(() => {
  resetScore()
  chooseWord()
})
</script>

<template>
  <RouterView />
</template>
