import { onNavigate } from './history.js';

describe('onNavigate', () => {
  it('should be a function', () => {
    expect(typeof onNavigate).toBe('function');
  });
  it('should load the page', () => {
    expect(onNavigate()).toMatchSnapshot();
  });
});
