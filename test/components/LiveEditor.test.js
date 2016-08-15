
import CodeMirror from 'codemirror'
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
      updateCode: sinon.spy(),
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
    const componentInstance = renderIntoDocument(<LiveEditor {...props} />)
    const codeMirror = componentInstance.wrapper.codeMirror
    const doc = codeMirror.doc // TextArea inside CodeMirror

    // Change TextArea value
    doc.setValue('Hello')
    // Trigger onChange method
    CodeMirror.signal(
      codeMirror, // target
      'change', // event name
      doc, // element to get value to pass to onChange
      { // change param object
        from: { ch: 0, line: 0 },
        to: { ch: 0, line: 0 },
        text: ['Hello'],
        removed: [''],
        origin: "+input"
      }
    )

    expect(props.updateCode).to.have.been.calledWith('Hello')
  })
})
