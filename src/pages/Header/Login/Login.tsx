
import { useAuth } from '../../../shared/Hooks/useAuth';
import { LogIn, LogOut, Settings} from '@styled-icons/ionicons-outline'

export default function Login(){
    const {currentUser,singInGoogle,singOutGoogle} = useAuth();

    async function handleUserLogin(){
        if(!currentUser){return await singInGoogle();}
    }
    
    function handleUserLogout(){
        if(currentUser){return singOutGoogle();}
    } 
        return(
            <div className='select-none '>     
                {currentUser?.isLogged ?
                <ul className='absolute pt-2'>
                    <li className='flex  bg-stone-900 px-4' >
                        <button className='py-2 text-white'onClick={handleUserLogout}>  
                        <Settings  className='pr-1 text-white w-5'/>
                           Settings
                        </button>
                    </li>
                    <li className='flex  bg-stone-900 px-4' >
                        <button className='py-2 text-white'onClick={handleUserLogout}>  
                        <LogOut  className='pr-1 text-white w-5'/>
                           Logout
                        </button>
                    </li>
                </ul>
                : 
                <ul className='absolute pt-2'>
                   <li className='flex  bg-stone-900 px-4' >
                        <button className='py-2 text-white'onClick={handleUserLogin}>  
                        <LogIn  className='pr-1 text-white w-5'/>
                           Login
                        </button>
                    </li>
                </ul>
                } 
        </div>
    )
    
    
}