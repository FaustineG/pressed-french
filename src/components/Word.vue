<script setup lang="ts">
defineProps<{ word: string; visible: boolean; found: boolean }>()
</script>

<template>
  <div class="word">
    <div v-for="letter in word.split('')" :key="letter" class="letter" :class="{ 'not-found': !found  && visible}">
      {{ visible ? letter : '-' }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.word {
  display: flex;
  min-width: 10rem;
  .letter {
    display: inline-flex;
    background: white;
    border: 1px solid var(--background-color);
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    color: black
  }

  .not-found{
    color: red;
  }

  
}
</style>
