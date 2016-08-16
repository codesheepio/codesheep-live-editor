import _$ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView

// CodeMirror needs navigator and document.createRange
// So, we need to mock those functions to global object
global.navigator = 'mock'
global.document.createRange = function() {
  return {
    setEnd: function() {},
    setStart: function() {},
    getBoundingClientRect: function() {
        return {}
    },
    getClientRects: function() {
      return []
    }
  }
}

const $ = _$(global.window)

chai.use(sinonChai)
chaiJquery(chai, chai.util, $)

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )
  return $(ReactDOM.findDOMNode(componentInstance))
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

const renderIntoDocument = TestUtils.renderIntoDocument

export { renderComponent, expect, sinon, renderIntoDocument }
