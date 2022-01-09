import Vue from 'vue'
import Routes from '@/components/Routes'

describe('Routes.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Routes)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Routes h2').textContent)
      .to.equal('Routes')
  })
})