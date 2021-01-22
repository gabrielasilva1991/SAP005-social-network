import { Register } from './index.js';
import * as services from '../../services/index.js';

services.registerUser = jest.fn(() => Promise.resolve(true));

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });

  it('should load the page', () => {
    expect(Register()).toMatchSnapshot();
  });
  it('when the user clicks the button he must have completed the registration', () => {
    Register().querySelector('#button-register').dispatchEvent(new Event('click'));
    expect(services.registerUser).toHaveBeenCalled();
  });
});
