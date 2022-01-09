import Vue from 'vue'
import Overview from '@/components/Overview'

describe('Overview.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Overview)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Overview h1').textContent)
      .to.equal('Welcome')
  })
})