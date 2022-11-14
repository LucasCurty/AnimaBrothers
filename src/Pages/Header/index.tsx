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
        <header className='p-4 flex flex-row justify-between px-6'>
            <nav 
                onClick={userLogin}
                style={{cursor:"pointer"}}
                className=''
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
                    <nav className='w-10'>
                        <Login/>
                    </nav>
                    : 
                    ""
                }
            </nav>
                
            {showMenu ? 
                <nav>
                    <ul>
                        <Link to="/meusfavoritos">
                            <li> Meus Favoritos</li>
                        </Link>
                        
                        <Link to="/listadeAnimes">
                            <li> Lista</li>
                        </Link>
                    </ul>
                </nav>
            : 
               " "
            }

            <Link  to="/"  className=' transition duration-300 ease-in-out hover:-translate-y-1'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-600 font-bold text-4xl' >Anima<span >Brother</span></h1>
            </Link>

            <button
                style={{backgroundColor: (showMenu) ? '#FFC857' : '#323031'}}
                onClick={show} >
            <Options className='w-10'/>
            </button>
        </header>
    );
}