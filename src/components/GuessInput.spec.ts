import { describe, expect, it } from 'vitest'
import GuessInput from './GuessInput.vue'
import { mount } from '@vue/test-utils'

const initComponent = (propsData = {}) => {
  return mount(GuessInput, {
    props: {
      ...propsData,
      modelValue: 'toto',
      availableLetters: []
    }
  })
}

describe('GuessInput', () => {
  it('should mount', () => {
    const wrapper = initComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
