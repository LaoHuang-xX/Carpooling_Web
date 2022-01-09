import Vue from 'vue'
import passenger_rank from '@/components/passenger_rank'

describe('passenger_rank.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(passenger_rank)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.passenger_rank h2').textContent)
      .to.equal('Passengers Ranking')
  })
})