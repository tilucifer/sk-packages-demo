import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts successfully', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the Vue logo', () => {
    const wrapper = mount(App)
    const logo = wrapper.find('img[alt="Vue logo"]')
    
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('src')).toContain('logo.svg')
  })

  it('renders HelloWorld component with correct message', () => {
    const wrapper = mount(App)
    
    // Check that HelloWorld is rendered with the correct prop
    expect(wrapper.text()).toContain('You did it!')
  })

  it('renders TheWelcome component', () => {
    const wrapper = mount(App)
    
    // TheWelcome should be present in the main section
    const main = wrapper.find('main')
    expect(main.exists()).toBe(true)
  })

  it('has correct structure with header and main sections', () => {
    const wrapper = mount(App)
    
    const header = wrapper.find('header')
    const main = wrapper.find('main')
    
    expect(header.exists()).toBe(true)
    expect(main.exists()).toBe(true)
  })
})
