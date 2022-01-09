import Vue from 'vue'
import OverviewStatus from '@/components/OverviewStatus'

describe('OverviewStatus.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(OverviewStatus)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.OverviewStatus h1').textContent)
      .to.equal('Welcome')
  })
})