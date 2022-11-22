
import { useAuth } from '../../../Hooks/useAuth';
import { LogIn, LogOut} from '@styled-icons/ionicons-outline'

export default function Login(){
    const {currentUser,singInGoogle,singOutGoogle} = useAuth();

    async function handleUserLogin(){
        if(!currentUser){return await singInGoogle();}
    }
    
    function handleUserLogout(){
        if(currentUser){return singOutGoogle();}
    }
    

    
        return(
            <ul className='absolute'>     
                {currentUser?.isLoged ?
                    <li className='flex bg-amber-500 w-24 rounded' >
                        <button className='text-white px-2'onClick={handleUserLogout}>  
                            Logout
                        <LogOut  className='ml-1 text-white w-5'/>
                        </button>
                    </li>
                : 
                    <li className='flex bg-amber-500 w-24 rounded'>
                        <button className='text-white px-2'onClick={handleUserLogin}> 
                            Login 
                            <LogIn className='text-white w-5'/>
                        </button>
                    </li>
                } 
        </ul>
    )
    
    
}