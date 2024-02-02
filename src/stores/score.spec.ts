import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import useScoreStore from './score'
import { setActivePinia, createPinia } from 'pinia'

describe('score store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should init at 0', () => {
    const store = useScoreStore()
    expect(store.$id).toBe('score')
    expect(store.score).toBe(0)
    expect(store.highScore).toBe(0)
  })
  it('should update high score if new score is higher', () => {
    localStorage.setItem('high-score', '12')
    const store = useScoreStore()
    expect(store.highScore).toBe(12)
    store.findWord(6)
    store.findWord(6)
    store.findWord(6)
    expect(store.score).toBe(18)
    expect(store.highScore).toBe(18)
    expect(localStorage.getItem('high-score')).toEqual('18')
  })
  it('should update score when finding a word', () => {
    const store = useScoreStore()
    expect(store.score).toBe(0)
    store.findWord(5)
    expect(store.score).toBe(5)
    store.findWord(3)
    expect(store.score).toBe(8)
  })

  it('should read localStorage for highScore', () => {
    localStorage.setItem('high-score', '222')
    const store = useScoreStore()
    expect(store.highScore).toBe(222)
  })

  it('should be able to reset score', () => {
    const store = useScoreStore()
    store.score = 12
    expect(store.score).toBe(12)
    store.resetScore()
    expect(store.score).toBe(0)
  })
})
