import { auth } from "../../../../firebase";

export const onAuthChange = ({setIsAuth}: {setIsAuth: (isValid: boolean) => void}) => {
    auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          firebaseUser.getIdTokenResult().then((idTokenResult) => {
            const token = idTokenResult.token;
            const expirationDate = new Date(idTokenResult.expirationTime);
            setIsAuth(true)
            localStorage.setItem('access_token', token);
            localStorage.setItem('access_token_expiration', expirationDate.toISOString());
            localStorage.setItem('user_id', firebaseUser.uid)
            window.location.href="/#/switch-view"
          });
        } else {
          setIsAuth(false)
          localStorage.removeItem('access_token');
          localStorage.removeItem('access_token_expiration');
          window.location.href = '/#/login'
        }
      });
}