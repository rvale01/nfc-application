import { auth } from "shared-functions";

export const onAuthChange = ({setIsAuth}: {setIsAuth: (isValid: boolean) => void}) => {
    auth.onAuthStateChanged((firebaseUser) => {
      console.log("Change?")
        if (firebaseUser && localStorage.getItem("user_id") === null) {
          firebaseUser.getIdTokenResult().then((idTokenResult) => {
            const token = idTokenResult.token;
            const expirationDate = new Date(idTokenResult.expirationTime);
            setIsAuth(true)
            localStorage.setItem('is_auth', 'true')
            localStorage.setItem('access_token', token);
            localStorage.setItem('access_token_expiration', expirationDate.toISOString());
            localStorage.setItem('user_id', firebaseUser.uid)
            if(!window.location.hash.includes("#/patient-details/")){
              window.location.href="/#/switch-view"
            }
          });
        } else {
          setIsAuth(false)
          localStorage.removeItem('is_auth')
          localStorage.removeItem('access_token');
          localStorage.removeItem('access_token_expiration');
        }
      });
}