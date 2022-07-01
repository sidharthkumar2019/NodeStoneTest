import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signin: async (email, pass) => {
          try {
            await auth().signInWithEmailAndPassword(email, pass);
          } catch (error) {
            console.log(error);
            alert(error.message);

            // if (error.code == 'auth/user-disabled')
            //   alert("Sorry but you can't access this app.");
            // else if (error.code == 'auth/invalid-email')
            //   alert('email address is invalid!');
            // else if (errorCode == 'auth/user-not-found')
            //   alert('No user corresponding to the email you entered.');
            // else if (errorCode == 'auth/wrong-password')
            //   alert('email/password is wrong.');
            // else alert('Something went wrong.');
          }
        },
        signup: async (email, pass) => {
          try {
            await auth().createUserWithEmailAndPassword(email, pass);
          } catch (error) {
            console.log(error);
            alert(error.message);

            // if (error.code === 'auth/email-already-in-use')
            //   alert('That email address is already in use!');
            // else if (error.code === 'auth/invalid-email')
            //   alert('email address is invalid!');
            // else if (errorCode == 'auth/weak-password')
            //   alert('The password is too weak.');
            // else alert('Something went wrong.');
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (err) {
            console.log(err);
            alert(err.message);
          }
        },
        forgot: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
            alert(
              "A recovery mail has been sent you.\nIf you can't find it in Inbox, please check the spam folder.",
            );
          } catch (error) {
            console.log(error);
            alert(error.message);

            // if (error.code === 'auth/invalid-email')
            //   alert('That email address is invalid!');
            // else if (errorCode == 'auth/user-not-found')
            //   alert('No user corresponding to that email.');
            // else alert('Something went wrong.');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
