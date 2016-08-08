import { expect, renderComponent } from '../test-helper'
import LivePlayground from '../../src/components/LivePlayground'

describe('LivePlayground', () => {
  let component

  beforeEach(() => {
    component = renderComponent(LivePlayground)
  })

  it('has a correct class', () => {
    expect(component).to.have.class('live-playground')
  })
})
