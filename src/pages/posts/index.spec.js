import { Posts } from './index.js';
import * as services from '../../services/index.js';

services.logOut = jest.fn(() => Promise.resolve(true));
services.creatPost = jest.fn(() => Promise.resolve(true));
services.getPost = jest.fn(() => Promise.resolve(true));

describe('Posts', () => {
  it('should be a function', () => {
    expect(typeof Posts).toBe('function');
  });
  it('When the user clicks on any button he should redirect to the home page', () => {
    Posts().querySelector('#logout').dispatchEvent(new Event('click'));
    expect(services.logOut).toHaveBeenCalled();
  });
  it('When the user clicks the button, he should call sign with email and password', () => {
    Posts().querySelector('#submit-post').dispatchEvent(new Event('click'));
    expect(services.creatPost).toHaveBeenCalled();
    expect(services.getPost).toHaveBeenCalled();
  });
});
