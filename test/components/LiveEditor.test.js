
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
      editorId: 'JS_EDITOR',
      code: '',
      updateCode: sinon.spy(),
      options: {
        mode: 'jsx',
        lineWrapping: true,
        smartIndent: true,
        matchBrackets: true,
        theme: 'monokai',
        readOnly: false,
        lineNumbers: true,
        tabSize: 2,
        indentUnit: 2,
      },
    }
    state = {
      code: {
        JS_EDITOR: '<TestComponent />',
      },
    }
    component = renderComponent(LiveEditor, props, state)
  })

  it('should have a correct class', () => {
    expect(component).to.have.class('live-editor')
  })

  it('should call updateCode() when text changed', () => {
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

    expect(props.updateCode).to.have.been.calledWith('JS_EDITOR', 'Hello')
  })
})
