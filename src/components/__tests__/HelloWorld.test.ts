import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly with message prop', () => {
    const msg = 'Test Message'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })

    expect(wrapper.text()).toContain(msg)
  })

  it('displays the greeting heading', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello' }
    })

    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('Hello')
    expect(heading.classes()).toContain('green')
  })

  it('renders the project description', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    expect(wrapper.text()).toContain('successfully created a project')
    expect(wrapper.text()).toContain('Vite')
    expect(wrapper.text()).toContain('Vue 3')
  })
})
