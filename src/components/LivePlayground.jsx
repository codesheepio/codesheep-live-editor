import React, { Component } from 'react';
import LiveEditor from './LiveEditor';
import LivePreview from './LivePreview';

class LivePlayground extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="live-playground">
        <LiveEditor />
        <LivePreview />
      </div>
    );
  }
}

export default LivePlayground;
