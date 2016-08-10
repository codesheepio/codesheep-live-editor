import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { transform } from 'babel-core';
import babelPresetEs2015 from 'babel-preset-es2015';
import babelPresetReact from 'babel-preset-react';

class LivePreview extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.executeCode(this.props.code);
  }

  componentDidUpdate(prevProps) {
    clearTimeout(this.timeoutID);

    if (this.props.code !== prevProps.code) {
      this.executeCode(this.props.code);
    }
  }

  compileCode(code) {
    return transform(
      code,
      { presets: [babelPresetEs2015, babelPresetReact] }
    ).code;
  }

  executeCode(code) {
    ReactDOM.unmountComponentAtNode(this.livePreview);

    try {
      const compiledCode = this.compileCode(code);
      const result = eval(compiledCode); // eslint-disable-line no-eval
      ReactDOM.render(result, this.livePreview);
    } catch (err) {
      // TODO: Handle err
    }
  }

  render() {
    return (
      <div className="live-preview" ref={(ref) => { this.livePreview = ref; }}>
        Live Preview
      </div>
    );
  }
}

LivePreview.propTypes = {
  code: React.PropTypes.string.isRequired,
};

export default LivePreview;
