const AuthService = {
  getToken: () => {
    return window.sessionStorage.getItem("token");
  },
  setToken: (token) => {
    window.sessionStorage.setItem("token", token);
  },
  setUserInfo: (user$) => {
    const userAsString = JSON.stringify(user$);
    window.sessionStorage.setItem("user", userAsString);
  },
  getUserInfo: () => {
    const userAsString = window.sessionStorage.getItem("user");
    return userAsString ? JSON.parse(userAsString) : null;
  },
  removeAllUserInfo: () => {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('token');
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
