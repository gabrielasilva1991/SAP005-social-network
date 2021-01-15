import { loginWithGoogle, saveUserUpdate, saveUser, registerUser, signIn, logOut, checkLogin,
creatPost, getPost, likePost, disLikePost, deletePost, editPost } from './index.js';

describe('loginWithGoogle', () => {
    it('should be a function', () => {
      expect(typeof loginWithGoogle).toBe('function');
    });
    it('should call firebase', () => {
        loginWithGoogle('provider');
        expect(firebase.auth).toBeCalled();
    });
})

describe('saveUserUpdate', () => {
    it('should be a function', () => {
      expect(typeof saveUserUpdate).toBe('function');
    });
    it('should call firebase', () => {
        saveUserUpdate('name');
        expect(firebase.auth).toBeCalled();
    });
})

describe('saveUser', () => {
    it('should be a function', () => {
      expect(typeof saveUser).toBe('function');
    });
    it('should call firebase', () => {
        saveUser('user', 'userEmail', 'userName');
        expect(firebase.auth).toBeCalled();
    });
})

describe('registerUser', () => {
  it('should be a function', () => {
    expect(typeof registerUser).toBe('function');
  });
  it('should call firebase', () => {
    registerUser();
    expect(firebase.auth).toBeCalled();
  });
})

describe('signIn', () => {
    it('should be a function', () => {
      expect(typeof signIn).toBe('function');
    });
    it('should call firebase', () => {
        signIn('email', 'password');
        expect(firebase.auth).toBeCalled();
    });
})

describe('logOut', () => {
    it('should be a function', () => {
      expect(typeof logOut).toBe('function');
    });
    it('should call firebase', () => {
        logOut();
        expect(firebase.auth).toBeCalled();
    });
}) 

describe('checkLogin', () => {
    it('should be a function', () => {
      expect(typeof checkLogin).toBe('function');
    });
    it('should call firebase', () => {
        checkLogin();
        expect(firebase.auth).toBeCalled();
    });
})

describe('creatPost', () => {
  it('should be a function', () => {
    expect(typeof creatPost).toBe('function');
  });
  it('should call firebase', () => {
      creatPost(postCreat);
      expect(firebase.auth).toBeCalled();
  });
})

describe('getPost', () => {
  it('should be a function', () => {
    expect(typeof getPost).toBe('function');
  });
})

describe('likePost', () => {
  it('should be a function', () => {
    expect(typeof likePost).toBe('function');
  });
})

describe('disLikePost', () => {
  it('should be a function', () => {
    expect(typeof disLikePost).toBe('function');
  });
})

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
})

describe('editPost', () => {
  it('should be a function', () => {
    expect(typeof editPost).toBe('function');
  });
})