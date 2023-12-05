import { describe, expect, it } from 'vitest'
import Word from './Word.vue'
import { mount } from '@vue/test-utils'

const initComponent = (propsData = {}) => {
  return mount(Word, {
    props: {
      ...propsData,
      word: 'toto',
      visible: true,
      found: false
    }
  })
}

describe('Word', () => {
  it('should mount', () => {
    const wrapper = initComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
