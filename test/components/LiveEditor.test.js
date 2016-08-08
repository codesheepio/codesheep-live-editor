import { expect, renderComponent } from '../test-helper';
import LiveEditor from '../../src/components/LiveEditor';

describe('LiveEditor', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(LiveEditor);
  });

  it('should have a correct class', () => {
    expect(component).to.have.class('live-editor');
  });
});
