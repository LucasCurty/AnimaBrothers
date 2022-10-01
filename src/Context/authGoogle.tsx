import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {createContext, ReactNode, useEffect, useState } from 'react';

export const AuthContext = createContext({} as AuthContext) ;
// alo alo
type User = {
  id: string | undefined;
  name: string | undefined;
  avatar: string | undefined
  isLoged: boolean
}
type AuthContext = {
  currentUser : User | undefined;
  singInGoogle: () => Promise<void>;
  singOutGoogle: () => void;
}
type AuthGoogleProvider = {
   children : ReactNode;
}

 export default function AuthGoogleProvider( props : AuthGoogleProvider) {

   const auth = getAuth();
   const [currentUser, setCurrentUser] = useState<User | undefined>()
  
  
 async function singInGoogle(){

    signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => {
          const user = res.user as any;
          
          setCurrentUser({
            id : user.uid,
            name: user.displayName,
            avatar: user.photoURL,
            isLoged: true
          })
        })
        .catch((error: Error) => {
            console.log(error);
        });
};

function singOutGoogle(){
    auth.signOut()
      .then(()=>{console.log("User has ben desconnected")})
      .catch((error: Error) => {console.log(error)})

    setCurrentUser({
      avatar:undefined,
      id: undefined,
      name: undefined,
      isLoged:false
    })
}
      
      useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user : any) => {
          if(user){
            setCurrentUser({
              id : user.uid,
              name : user.displayName,
              avatar: user.photoURL,
              isLoged: true
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