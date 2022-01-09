import Vue from 'vue'
import login from '@/components/login'

describe('login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(login)
    const vm = new Constructor().$mount()
    expect('Administrator Login')
      .to.equal('Administrator Login')
  })
})
