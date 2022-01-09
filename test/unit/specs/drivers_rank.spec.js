import Vue from 'vue'
import drivers_rank from '@/components/drivers_rank'

describe('drivers_rank.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(drivers_rank)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.drivers_rank h2').textContent)
      .to.equal('Drivers Ranking')
  })
})