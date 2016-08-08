import { expect, renderComponent } from '../test-helper';
import LivePreview from '../../src/components/LivePreview';

describe('LivePreview', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(LivePreview);
  });

  it('should have a correct class', () => {
    expect(component).to.have.class('live-preview');
  });
});
