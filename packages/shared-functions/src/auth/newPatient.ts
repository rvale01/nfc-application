import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

function generateRandomPassword(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }

export const createNewUser = async(email: string) => {
    const auth = getAuth();
    const password = generateRandomPassword();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);  
      await sendPasswordResetEmail(auth, email);
      return userCredential;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
}
  