import { expect, renderComponent, sinon } from '../test-helper'
import LivePlayground from '../../src/components/LivePlayground'

describe('LivePlayground', () => {
  let component

  beforeEach(() => {
    const props = {
      code: {},
      updateCode: sinon.stub(),
    }
    component = renderComponent(LivePlayground, props)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-playground')
  })

  it('should have a LiveEditor', () => {
    expect(component.find('.live-editor')).to.have.length(1)
  })

  it('should have a LivePreview', () => {
    expect(component.find('.live-preview')).to.have.length(1)
  })
})
