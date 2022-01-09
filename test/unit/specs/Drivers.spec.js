import Vue from 'vue'
import Drivers from '@/components/Drivers'

describe('Drivers.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Drivers)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Drivers h2').textContent)
      .to.equal('Drivers')
  })
})