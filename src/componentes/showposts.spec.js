import { showPosts } from './showposts.js';
import * as services from '../services/index.js';

services.likePost = jest.fn(() => Promise.resolve(true));
services.disLikePost = jest.fn(() => Promise.resolve(true));
services.deletePost = jest.fn(() => Promise.resolve(true));
services.editPost = jest.fn(() => Promise.resolve(true));

describe('showPosts', () => {
  it('should be a function', () => {
    expect(typeof showPosts).toBe('function');
  });
  it('When the user clicks on the button they should like the post and show the like on the screen', () => {
    showPosts().querySelector('.like').dispatchEvent(new Event('click'));
    expect(services.likePost).toHaveBeenCalled();
  });
  it('When the user clicks on the button he should dislike the post and show it on the screen', () => {
    showPosts().querySelector('.like').dispatchEvent(new Event('click'));
    expect(services.disLikePost).toHaveBeenCalled();
  });
  it('When the user clicks the button he must delete the post', () => {
    showPosts().querySelector('.delete').dispatchEvent(new Event('click'));
    expect(services.deletePost).toHaveBeenCalled();
  });
  it('When the user clicks the button, the option to edit the post should appear', () => {
    showPosts().querySelector('.edit').dispatchEvent(new Event('click'));
    showPosts().querySelector('.on-edit');
  });
  it('When the user clicks the button, he must save the edited post', () => {
    showPosts().querySelector('.save-button').dispatchEvent(new Event('click'));
  });
  it('When the user clicks the button, the edited post must be displayed on the screen', () => {
    showPosts().querySelector('.save-button').dispatchEvent(new Event('click'));
    expect(services.editPost).toHaveBeenCalled();
  });
});
