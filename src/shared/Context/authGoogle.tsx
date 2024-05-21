import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {createContext, ReactNode, useEffect, useState } from 'react';

// My Context
export const AuthContext = createContext({} as AuthContext) ;

// Objects Types
type User = {
  id: string | undefined;
  name: string | null;
  avatar: string | null
  isLogged: boolean
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
type AuthContext = {
  currentUser : User | undefined;
  singInGoogle: () => Promise<void>;
  singOutGoogle: () => void;
}
type AuthGoogleProvider = {
   children : ReactNode;
}

 // eslint-disable-next-line @typescript-eslint/no-redeclare
 export default function AuthGoogleProvider( props : AuthGoogleProvider){

   const auth = getAuth();
   const [currentUser, setCurrentUser] = useState<User | undefined>()
  
  async function singInGoogle(){
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => {
          const user = res.user;
          
          setCurrentUser({
            id : user.uid,
            name: user.displayName,
            avatar: user.photoURL,
            isLogged: true
          })
          console.log(user)
        })
        .catch((error: Error) => {
            console.log(error.message);
        });
  };

  function singOutGoogle(){
      auth.signOut()
        .then(()=>{console.log("User has ben desconnected")})
        .catch((error: Error) => {console.log(error)})

      setCurrentUser({
        avatar:null,
        id: undefined,
        name: null,
        isLogged:false
      })
  }
      
  useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if(user){
            setCurrentUser({
              id : user.uid,
              name : user.displayName,
              avatar: user.photoURL,
              isLogged: true
            })
         }
       })
       unsubscribe();
  },[])
      
  return(
    <AuthContext.Provider value={{currentUser, singInGoogle,singOutGoogle}}>
      {props.children}
    </AuthContext.Provider>
  ) 
};