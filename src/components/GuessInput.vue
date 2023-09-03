<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ modelValue: string; availableLetters: string[] }>()

const letters = ref(props.availableLetters)
const emits = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
  (e: 'enter'): void
}>()

const inputValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (newValue) => {
    emits('update:modelValue', newValue)
  }
})

const enterLetter = (letter: string) => {
  inputValue.value = inputValue.value.concat(letter)
}

const onEnter = () => {
  emits('enter')
}

const shuffle = () => {
  letters.value = letters.value.sort(() => 0.5 - Math.random())
}
</script>

<template>
  <section class="letter-section">
    <div class="letters">
      <button
        v-for="(letter, index) in letters"
        :key="letter + index"
        @click="() => enterLetter(letter)"
        class="letter-button"
      >
        {{ letter }}
      </button>
    </div>
    <button @click="shuffle" class="shuffle-button"><img src="../assets/refresh.svg" /></button>
  </section>
  <section class="input-section">
    <input
      type="text"
      v-model="inputValue"
      @keydown.enter="onEnter"
      @keydown.space="shuffle"
    />
    <button @click="onEnter">ok</button>
  </section>
</template>

<style scoped lang="scss">
.letter-section {
  display: flex;
  margin-bottom: 1rem;

  .letters {
    display: flex;
    .letter-button {
      border-radius: 0;
      width: 3rem;
      height: 3rem;
      font-size: 2rem;
      margin: 0 0.5rem;
    }
  }

  .shuffle-button {
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }
}

.input-section {
  height: 3rem;

  display: flex;
  input {
    border-radius: 5px 0 0 5px;
    font-size: 2rem;
    border: none;
    color: black
  }

  button {
    border-radius: 0 5px 5px 0;
  }
}
</style>
