import { Login } from './index.js';
import * as services from '../../services/index.js';
import * as utils from '../../utils/history.js';

services.signIn = jest.fn(() => Promise.resolve(true));
services.loginWithGoogle = jest.fn(() => Promise.resolve(true));
services.registerUser = jest.fn(() => Promise.resolve(true));
utils.onNavigate = jest.fn();

describe('Login', () => {
    it('should be a function', () => {
        expect(typeof Login).toBe('function');
    }); 

    it('should load the page', () => {
        expect(Login()).toMatchSnapshot();
    });

    it('When the user clicks the button, he should call sign with email and password', () => {
        Login().querySelector('#button-login').dispatchEvent(new Event('click'));
        expect(services.signIn).toHaveBeenCalled();
    });

    it('When the user clicks the button he should call sign with google account', () => {
        Login().querySelector('#button-google').dispatchEvent(new Event('click'));
        expect(services.loginWithGoogle).toHaveBeenCalled();
    });

    it('When the user clicks the button, they should redirect to the registration page', () => {
        Login().querySelector('#button-create-account').dispatchEvent(new Event('click'));
        expect(utils.onNavigate).toHaveBeenCalledWith('/register');
    });
});