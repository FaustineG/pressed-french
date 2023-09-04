<script setup lang="ts">
import useWords from './services/useWords'
import { onMounted } from 'vue'
import useScoreStore from './stores/score'
import { version } from '../package.json'

const { chooseWord } = useWords()
const { resetScore } = useScoreStore()

onMounted(() => {
  resetScore()
  chooseWord()
})
</script>

<template>
  <main>
    <RouterView />
  </main>
  <section class="version">
    <span> Copryight FofoCorp© 2023 </span>
    {{ version }}
  </section>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  .version {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    background-color: var(--secondary-color);
  }
}
</style>
