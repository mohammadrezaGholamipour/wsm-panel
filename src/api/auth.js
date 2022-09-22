const AuthService = {
  getToken: () => {
    return window.localStorage.getItem('token');
  },
  setToken: (token) => {
    window.localStorage.setItem('token', token);
  },
  setUserInfo: (user$) => {
    const userAsString = JSON.stringify(user$);
    window.localStorage.setItem('user', userAsString);
  },
  getUserInfo: () => {
    const userAsString = window.localStorage?.getItem('user') ?? '';
    return userAsString ? JSON.parse(userAsString) : null;
  },
  removeAllUserInfo: () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
  },
  isExpiredToken: () => {
    const user = AuthService.getUserInfo();
    const expiresOn = user && user.expiresOn;
    if (!expiresOn) return true;
    const timeEx = new Date(expiresOn);
    return timeEx < new Date();
  },
};
export default AuthService;
