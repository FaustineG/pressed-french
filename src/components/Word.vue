<script setup lang="ts">
defineProps<{ word: string; visible: boolean }>()
</script>

<template>
  <div class="word">
    <div v-for="letter in word.split('')" :key="letter" class="letter">
      {{ visible ? letter : '_' }}
    </div>
  </div>
</template>

<style scoped>
.word {
  display: flex;
  color: white;
}
.letter {
  border: 1px solid white;
  width: 20px;
  height: 20px;
  text-align: center;
}
</style>
