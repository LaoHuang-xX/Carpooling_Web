import Vue from 'vue'
import OverviewRank from '@/components/OverviewRank'

describe('OverviewRank.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(OverviewRank)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.OverviewRank h1').textContent)
      .to.equal('Welcome')
  })
})