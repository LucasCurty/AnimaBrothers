
import { useAuth } from '../../../Hooks/useAuth';

import * as styled from './styled';

export default function Login(){
    const {currentUser,singInGoogle,singOutGoogle} = useAuth();

    async function handleUserLogin(){
        if(!currentUser){
           return await singInGoogle();
        }
    }
    
    function handleUserLogout(){
        if(currentUser){
        return singOutGoogle();
        }
    }
    

    
        return(
            <ul style={{listStyle:"none"}}>     
                {currentUser?.isLoged ?
                    <li>
                        <styled.Button
                            onClick={handleUserLogout}> Logout <styled.IconLogOut />
                        </styled.Button>
                    </li>
                : 
                    <li>
                        <styled.Button
                            onClick={handleUserLogin}> Login <styled.IconLogIn />
                        </styled.Button>
                    </li>
                } 
        </ul>
    )
    
    
}