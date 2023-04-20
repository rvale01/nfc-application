export const isTokenValid = () => {
    const token = localStorage.getItem('access_token');
    const expirationDateString = localStorage.getItem('access_token_expiration');
    if (token && expirationDateString) {
      const expirationDate = new Date(expirationDateString);
      const now = new Date();
      return expirationDate > now;
    } else {
      return false;
    }
};