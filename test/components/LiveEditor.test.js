import { expect, renderComponent } from '../test-helper'
import LiveEditor from '../../src/components/LiveEditor'

describe('live-editor', () => {
  let component

  beforeEach(() => {
    component = renderComponent(LiveEditor)
  })

  it('has a correct class', () => {
    expect(component).to.have.class('live-editor')
  })
})
