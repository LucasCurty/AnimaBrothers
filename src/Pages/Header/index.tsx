import {  useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth';

import {Person, Options} from '@styled-icons/ionicons-outline'
import Login from './Login/Login';


export default function Header(){
const [showMenu, setShowMenu] = useState<Boolean>(false);
const [menuUser, setMenuUser] = useState<Boolean>(false)

const {currentUser} = useAuth()

    function show(){ 
        if(!showMenu){
            setShowMenu(true);
        }else{
            setShowMenu(false) ;
        }
}
    function userLogin(){
        if(menuUser){
            setMenuUser(false)
        }else{
            setMenuUser(true)
        }
    }

    return(
        <header className='p-4 flex flex-row justify-between px-6 relative'>
            <nav 
                onClick={userLogin}
                style={{cursor:"pointer"}}
            >
                {!currentUser?.isLoged ?
                    <Person className='rounded-full shadow-xl shadow-amber-600 w-10'/>
                : 
                    <img style={{
                        width:'35px',
                        borderRadius:'50px',
                        marginTop:'5px',
                        }} 
                        src={currentUser?.avatar} 
                        alt="photoUser" 
                        className='shadow-xl shadow-amber-600'
                    />
                }
                
                {menuUser ?
                    <nav className='w-10 '>
                        <Login/>
                    </nav>
                    : 
                    ""
                }
            </nav>
                
           

            <Link  to="/"  className=' transition duration-300 ease-in-out hover:-translate-y-1'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-600 font-bold text-4xl' >Anima<span >Brother</span></h1>
            </Link>
            
            
            <button className='bg-amber-600 rounded text-white hover:text-amber-600 hover:bg-white' onMouseEnter={show}>
            <Options className='w-8'/>
            </button>
            {showMenu ? 
                <nav className='absolute z-10 top-20 right-0 bg-amber-600' onMouseLeave={show}>
                    <ul className='text-white'>
                        <Link to="/meusfavoritos" >
                            <li className='p-2 hover:bg-white hover:text-amber-600'>Meus Favoritos</li>
                        </Link>
                        
                        <Link to="/listadeAnimes" >
                            <li className='p-2 hover:bg-white hover:text-amber-600'>Lista</li>
                        </Link>
                    </ul>
                </nav>
            : 
               " "
            }
        </header>
    );
}