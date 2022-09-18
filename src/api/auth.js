const AuthService = {
  getToken: () => {
    return window.sessionStorage.getItem("token");
  },
  setToken: (token) => {
    window.sessionStorage.setItem("token", token);
  },
  getRefreshToken: () => {
    return window.sessionStorage.getItem("refreshToken");
  },
  setRefreshToken: (token) => {
    window.sessionStorage.setItem("refreshToken", token);
  },
  setUserInfo: (user$) => {
    const userAsString = JSON.stringify(user$);
    window.sessionStorage.setItem("user", userAsString);
  },
  getUserInfo: () => {
    const userAsString = window.sessionStorage.getItem("user");
    return userAsString ? JSON.parse(userAsString) : null;
  },
  removeUserInfo: () => {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('planId');
    window.sessionStorage.removeItem('plan');
  },
  isExpiredToken: () => {
    const user = AuthService.getUserInfo();
    const expiresOn = user && user.expiresOn;
    if (!expiresOn) return true;
    const timeEx = new Date(expiresOn);
    return timeEx < new Date();
  },
  isAdmin: () => {
    const user = AuthService.getUserInfo();
    return user && user.isAdmin ? true : false;
  },
  hasToken: () =>
    window.sessionStorage.getItem("token")?.length &&
    window.sessionStorage.getItem("refreshToken")?.length,
  getBranchId: () => AuthService.getUserInfo()?.data?.branchId ?? null,
};
export default AuthService;
