import { describe, expect, it } from 'vitest'
import Word from './Word.vue'
import { mount } from '@vue/test-utils'

const initComponent = (propsData = {}) => {
  return mount(Word, {
    props: {
      word: 'patate',
      visible: true,
      found: false,
      ...propsData
    }
  })
}

describe('Word', () => {
  it('should match snapshot', () => {
    const wrapper = initComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should display letters', () => {
    const wrapper = initComponent()
    const allLettersElements = wrapper.findAll('.letter')
    expect(allLettersElements).toHaveLength(6)

    expect(allLettersElements[0].text()).toEqual('p')
    expect(allLettersElements[1].text()).toEqual('a')
    expect(allLettersElements[2].text()).toEqual('t')
    expect(allLettersElements[3].text()).toEqual('a')
    expect(allLettersElements[4].text()).toEqual('t')
    expect(allLettersElements[5].text()).toEqual('e')
  })
  it('should display only hyphens when not visible', () => {
    const wrapper = initComponent({ visible: false })
    expect(wrapper.findAll('.letter')).toHaveLength(6)
    wrapper.findAll('.letter').forEach((letterElement) => {
      expect(letterElement.text()).toEqual('-')
    })
  })
})
