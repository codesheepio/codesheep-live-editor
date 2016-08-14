
import React from 'react'
import { expect, renderComponent, renderIntoDocument, sinon } from '../test-helper'
import LiveEditor from '../../src/components/LiveEditor'

describe('LiveEditor', () => {
  let component
  let props
  let state

  beforeEach(() => {
    props = {
      code: '',
      updateCode: sinon.spy(), // eslint-disable-line
    }
    state = {
      code: '<TestComponent />',
    }
    component = renderComponent(LiveEditor, props, state)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-editor')
  })

  it('calls updateCode when text changed', () => {
    const liveEditorInstance = renderIntoDocument(<LiveEditor {...props} />)
    const codeMirrorInstance = liveEditorInstance.codeMirror.getCodeMirrorInstance()
    console.log(codeMirrorInstance) // eslint-disable-line
    codeMirrorInstance.signal(codeMirrorInstance, 'change', '<Hello />')
    expect(props.updateCode).to.have.been.called()
  })
})
