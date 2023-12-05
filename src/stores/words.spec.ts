import { afterEach, beforeEach, describe, expect, it, vi, vitest } from 'vitest'
import { allSixLetterWords, findAllOtherWords, useWordsStore } from './words'
import { setActivePinia, createPinia } from 'pinia'

vi.mock('@/assets/words.json', () => {
  return { default: ['tomate', 'mat', 'mot', 'autre'] }
})

describe('words store', () => {
  describe('util functions', () => {
    it('should find all 6 letter words', () => {
      expect(allSixLetterWords).toEqual(['tomate'])
    })

    it('should find all corresponding words from a 6 letter word', () => {
      expect(findAllOtherWords(['tomate', 'mat', 'mot', 'autre', 'patate'], 'tomate')).toEqual([
        'mat',
        'mot',
        'tomate'
      ])
    })
  })

  describe('store', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('should init correctly', () => {
      const wordsStore = useWordsStore()
      expect(wordsStore.allWords).toStrictEqual([])
    })

    it('should be able to select a word', () => {
      const wordsStore = useWordsStore()
      expect(wordsStore.availableLetters).toEqual([])
      wordsStore.chooseWord()
      expect(wordsStore.availableLetters).toContain('t')
      expect(wordsStore.availableLetters).toContain('o')
      expect(wordsStore.availableLetters).toContain('m')
      expect(wordsStore.availableLetters).toContain('a')
      expect(wordsStore.availableLetters).toContain('e')
    })
  })
})
