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
    <span class="copyright"> Copryight FofoCorp© 2023 </span>
    v.{{ version }}
  </section>
</template>

<style lang="scss">
.version {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .copyright {
    font-size: 15px;
  }
  font-size: 15px;
  background-color: var(--secondary-color);
}
</style>
