import Vue from 'vue'
import city_rank from '@/components/city_rank'

describe('city_rank.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(city_rank)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.city_rank h2').textContent)
      .to.equal('Cities Ranking')
  })
})