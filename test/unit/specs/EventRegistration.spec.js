import Vue from 'vue'
import EventRegistration from '@/components/EventRegistration'

describe('EventRegistration.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(EventRegistration)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.eventregistration h2').textContent)
      .to.equal('Passengers')
  })
})
