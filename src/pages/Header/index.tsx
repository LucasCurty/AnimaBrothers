import {  useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../shared/Hooks/useAuth';

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
        <header className='p-4 flex flex-row items-center justify-between px-6 relative'>
            <nav 
                onMouseEnter={userLogin}
                className='items-center'
            >
                {!currentUser?.isLogged ?
                    <Person className='rounded-full shadow-xl shadow-amber-600 w-8 p-1 text-white'/>
                : 
                    <img
                        src={currentUser?.avatar} 
                        alt="photoUser" 
                        className='shadow-xl shadow-amber-600 w-8 rounded-full'
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
            
            
            <button className='bg-amber-400 roundednpx text-white hover:bg-amber-600' onMouseEnter={show}>
            <Options className='w-8'/>
            </button>
            {showMenu ? 
                <nav className='absolute z-10 top-20 right-0 bg-amber-600' onMouseLeave={show}>
                    <ul className='text-white'>
                        <Link to="/meusfavoritos" >
                            <li className='p-2 hover:bg-white hover:text-amber-600'>My Favorites</li>
                        </Link>
                        
                        <Link to="/listadeAnimes" >
                            <li className='p-2 hover:bg-white hover:text-amber-600'>Anime List</li>
                        </Link>
                    </ul>
                </nav>
            : 
               " "
            }
        </header>
    );
}