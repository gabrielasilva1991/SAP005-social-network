import { showPosts } from './showposts.js';
import * as services from '../services/index.js';

services.likePost = jest.fn(() => Promise.resolve(true));
services.disLikePost = jest.fn(() => Promise.resolve(true));
services.deletePost = jest.fn(() => Promise.resolve(true));
services.editPost = jest.fn(() => Promise.resolve(true));

const mockPost = {
  postId: 'Oi',
  userName: 'Teste',
  date: '15/01/2020',
  text: 'Testando',
  likes: [1],
};

describe('showPosts', () => {
  it('should be a function', () => {
    expect(typeof showPosts).toBe('function');
  });
  it('When the user clicks on the button they should like the post and show the like on the screen', () => {
    showPosts(mockPost).querySelector('.like').dispatchEvent(new Event('click'));
    expect(services.likePost).toHaveBeenCalled();
  });
  it('When the user clicks on the button he should dislike the post and show it on the screen', () => {
    showPosts(mockPost).querySelector('.button-like').dispatchEvent(new Event('click'));
    expect(services.disLikePost).toHaveBeenCalled();
  });
  it('When the user clicks the button he must delete the post', () => {
    showPosts(mockPost).querySelector('.button-delete').dispatchEvent(new Event('click'));
    expect(services.deletePost).toHaveBeenCalled();
  });
  it('When the user clicks the button, the option to edit the post should appear', () => {
    showPosts(mockPost).querySelector('.button-edit').dispatchEvent(new Event('click'));
    showPosts(mockPost).querySelector('.on-edit');
  });
  it('When the user clicks the button, he must save the edited post', () => {
    showPosts(mockPost).querySelector('.button-save').dispatchEvent(new Event('click'));
  });
  it('When the user clicks the button, the edited post must be displayed on the screen', () => {
    showPosts(mockPost).querySelector('.button-save').dispatchEvent(new Event('click'));
    expect(services.editPost).toHaveBeenCalled();
  });
});
