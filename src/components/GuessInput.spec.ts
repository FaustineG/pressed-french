import { describe, expect, it } from 'vitest'
import GuessInput from './GuessInput.vue'
import { mount } from '@vue/test-utils'

const initComponent = (propsData = {}) => {
  return mount(GuessInput, {
    props: {
      modelValue: '',
      availableLetters: [],
      ...propsData
    }
  })
}

describe('GuessInput', () => {
  it('should match snapshot', () => {
    const wrapper = initComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be able to click on letter', () => {
    const wrapper = initComponent()
    const allLetterButtonElements = wrapper.findAll('.letter-button')
  })
})
