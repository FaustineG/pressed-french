<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ modelValue: string; availableLetters: string[] }>()
const emits = defineEmits<{
  (e: 'update:modelValue', newValue: string): void
  (e: 'enter'): void
}>()

const letters = ref(props.availableLetters)
const allClicked = ref([false, false, false, false, false, false])

const lettersClicked = computed(() =>
  allClicked.value.map((clicked, index) => ({ letter: letters.value[index], clicked, index }))
)

// const isCorrectGuess = (guess: string) => {
//   let tempLetters = letters.value.toString()
//   return guess
//     .split('')
//     .map((letter) => {
//       const includesLetter = tempLetters.includes(letter)
//       if (includesLetter) {
//         tempLetters = tempLetters.replace(letter, '')
//       }
//       return includesLetter
//     })
//     .reduce((acc, val) => acc && val, true)
// }

const inputValue = computed({
  get: () => {
    return props.modelValue
  },
  set: (newValue) => {
    emits('update:modelValue', newValue)
  }
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    onEnter()
  } else if (e.key === 'Alt' || e.key === 'Control' || e.key === 'Shift') {
    shuffle()
  } else if (e.key === 'Backspace') {
    const indexLetter = letters.value.indexOf(inputValue.value.slice(-1))
    allClicked.value[indexLetter] = false
    inputValue.value = inputValue.value.slice(0, -1)

    return
  } else {
    // const letter = e.key.toLowerCase()
    const availableLetter = lettersClicked.value.find(
      (l) => l.letter === e.key && l.clicked === false
    )
    if (availableLetter) {
      inputValue.value += availableLetter.letter
      allClicked.value[availableLetter.index] = true
    }
  }
}

const clickLetter = (letter: string, index: number, clicked: boolean) => {
  if (clicked) {
    inputValue.value = inputValue.value.slice(0, -1)
    allClicked.value[index] = false
  } else {
    inputValue.value = inputValue.value.concat(letter)
    allClicked.value[index] = true
  }
}

const onEnter = () => {
  emits('enter')
  allClicked.value = [false, false, false, false, false, false]
}

const shuffle = () => {
  letters.value = letters.value.sort(() => 0.5 - Math.random())
  inputValue.value = ''
  allClicked.value = [false, false, false, false, false, false]
}

const onDelete = () => {
  const availableLetter = lettersClicked.value.find(
    (l) => l.letter === inputValue.value.slice(-1) && l.clicked === true
  )
  if (availableLetter) {
    inputValue.value = inputValue.value.slice(0, -1)
    allClicked.value[availableLetter?.index] = false
  }
}
</script>

<template>
  <section class="letter-section">
    <div class="letters">
      <button
        v-for="{ letter, index, clicked } in lettersClicked"
        :key="letter + index.toString()"
        @click="() => clickLetter(letter, index, clicked)"
        class="letter-button"
        :class="{ disabled: clicked }"
      >
        {{ letter }}
      </button>
    </div>
    <button @click="onDelete" class="delete-button">&lt;</button>
    <button @click="shuffle" class="shuffle-button"><img src="../assets/refresh.svg" /></button>
  </section>
  <section class="input-section">
    <input type="text" v-model="inputValue" @keydown.prevent="onKeydown" />
    <button @click="onEnter">ok</button>
  </section>
</template>

<style scoped lang="scss">
.letter-section {
  --letter-size: 3rem;
  --font-size: 2rem;
  display: flex;
  margin-bottom: 1rem;
  gap: 2rem;

  .letters {
    display: flex;
    .letter-button {
      border-radius: 0;
      width: var(--letter-size);
      height: var(--letter-size);
      font-size: var(--font-size);
      margin: 0 0.5rem;
      font-variant: small-caps;
    }

    .disabled {
      background-color: grey;
    }
  }

  .shuffle-button,
  .delete-button {
    width: var(--letter-size);
    height: var(--letter-size);
    font-size: var(--font-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 600px) {
  * {
    --letter-size: 5rem;
    --font-size: 4rem;
  }
}

.input-section {
  min-height: 3rem;

  display: flex;
  input {
    border-radius: 5px 0 0 5px;
    font-size: var(--font-size);
    border: none;
  }

  button {
    border-radius: 0 5px 5px 0;
  }
}
</style>
