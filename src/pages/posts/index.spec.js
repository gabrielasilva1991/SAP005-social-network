import { Posts, showPosts, showAreaToEdit, saveEditedPost } from './index.js';
import * as services from '../../services/index.js';

services.logOut = jest.fn(() => Promise.resolve(true));
services.creatPost = jest.fn(() => Promise.resolve(true));
services.getPost = jest.fn(() => Promise.resolve(true));
services.likePost = jest.fn(() => Promise.resolve(true));
services.disLikePost = jest.fn(() => Promise.resolve(true));
services.deletePost = jest.fn(() => Promise.resolve(true));
services.editPost = jest.fn(() => Promise.resolve(true));

describe('Posts', () => {
    it('should be a function', () => {
        expect(typeof Posts).toBe('function');
    });
    
    it('When the user clicks on any button he should redirect to the home page', () => {
        Posts().querySelector('#logout').dispatchEvent(new Event('click'));
        expect(services.logOut).toHaveBeenCalled();
        //expect(services.logOut()).toBe(true);
    });

    it('When the user clicks the button, he should call sign with email and password', () => {
        Posts().querySelector('#submit-post').dispatchEvent(new Event('click'));
        expect(services.creatPost).toHaveBeenCalled();
        //expect(services.creatPost()).toBe(true);
        expect(services.getPost).toHaveBeenCalled();
        //expect(services.getPost()).toBe(true);
    });
});

describe('showPosts', () => {
    it('should be a function', () => {
      expect(typeof showPosts).toBe('function');
    });
    it('When the user clicks on the button they should like the post and show the like on the screen', () => {
        showPosts().querySelector('.like').dispatchEvent(new Event('click'));
        expect(services.likePost).toHaveBeenCalled();
        //expect(services.likePost()).toBe(true);
    });
    it('When the user clicks on the button they should like the post and show the like on the screen', () => {
        showPosts().querySelector('.like').dispatchEvent(new Event('click'));
        expect(services.likePost).toHaveBeenCalled();
        //expect(services.likePost()).toBe(true);
    });
    it('When the user clicks on the button he should dislike the post and show it on the screen', () => {
        showPosts().querySelector('.like').dispatchEvent(new Event('click'));
        expect(services.disLikePost).toHaveBeenCalled();
        //expect(services.disLikePost()).toBe(true);
    });
    it('When the user clicks the button he must delete the post', () => {
        showPosts().querySelector('.delete').dispatchEvent(new Event('click'));
        expect(services.deletePost).toHaveBeenCalled();
        //expect(services.deletePost()).toBe(true);
    });
    it('When the user clicks the button, the option to edit the post should appear', () => {
        showPosts().querySelector('.edit').dispatchEvent(new Event('click'));
        expect(showAreaToEdit).toHaveBeenCalled();
        //expect(showAreaToEdit()).toBe(true);
        showPosts().querySelector('.on-edit');
    });
    it('When the user clicks the button, he must save the edited post', () => {
        showPosts().querySelector('.save-button').dispatchEvent(new Event('click'));
        expect(saveEditedPost).toHaveBeenCalled();
        //expect(saveEditedPost()).toBe(true);        
    });
    it('When the user clicks the button, the edited post must be displayed on the screen', () => {
        showPosts().querySelector('.save-button').dispatchEvent(new Event('click'));        
        expect(saveEditedPost).toHaveBeenCalled();
        expect(services.editPost).toHaveBeenCalled();
        //expect(services.editPost()).toBe(true);
    });
});