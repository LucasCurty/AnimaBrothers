import {  useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../Hooks/useAuth';

import * as style from './styled';

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
        <style.Header className='py-4'>
            <nav 
                onClick={userLogin}
                style={{cursor:"pointer"}}
            >
                {!currentUser?.isLoged ?
                    <style.IconUser />
                : 
                    <img style={{
                        width:'35px',
                        borderRadius:'50px',
                        marginTop:'5px',
                        }} 
                        src={currentUser?.avatar} 
                        alt="photoUser" 
                    />
                }
                
                {menuUser ?
                    <style.NavUser>
                        <Login/>
                    </style.NavUser>
                    : 
                    ""
                }
            </nav>
                
            {showMenu ? 
                <style.NavShow >
                    <ul>
                        <Link to="/meusfavoritos">
                            <li> Meus Favoritos</li>
                        </Link>
                        
                        <Link to="/listadeAnimes">
                            <li> Lista</li>
                        </Link>
                    </ul>
                </style.NavShow>
            : 
               " "
            }

            <Link  to="/">
                <h1>Anima<span>Brother</span></h1>
            </Link>

            <style.Btn 
                style={{backgroundColor: (showMenu) ? '#FFC857' : '#323031'}}
                onClick={show} >
            <style.IconMenu />
            </style.Btn>
        </style.Header>
    );
}