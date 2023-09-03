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
  <div>
    <div>
      <button
        v-for="(letter, index) in letters"
        :key="letter + index"
        @click="() => enterLetter(letter)"
      >
        {{ letter }}
      </button>
      <button @click="shuffle">shuffle</button>
    </div>
    <input type="text" v-model="inputValue" @keydown.enter="onEnter" />
  </div>
</template>
