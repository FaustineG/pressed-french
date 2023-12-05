import { beforeEach, describe, expect, it } from 'vitest'
import GameView from './GameView.vue'
import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

const initComponent = (propsData = {}) => {
  return shallowMount(GameView, {
    props: {
      ...propsData
    }
  })
}

describe('GameView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should mount', () => {
    const wrapper = initComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
