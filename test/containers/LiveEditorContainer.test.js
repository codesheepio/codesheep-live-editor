import { expect, renderComponent } from '../test-helper'
import LiveEditorContainer from '../../src/containers/LiveEditorContainer'

describe('LiveEditorContainer', () => {
  let component

  before(() => {
    const props = null
    const state = {
      code: ''
    }

    component = renderComponent(LiveEditorContainer, props, state)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-editor')
  })
})
