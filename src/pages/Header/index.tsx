import {  useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../shared/Hooks/useAuth';

import {Person,Bookmark, Search, CaretDown} from '@styled-icons/ionicons-outline'
import Login from './Login/Login';


export default function Header(){
    const [menu,setMenu] = useState<Boolean>(false)
    function SeaMenu(){ !menu ? setMenu(true): setMenu(false)}
const {currentUser} = useAuth()
    return(
        <header className='fixed flex w-screen bg-stone-800 justify-between items-center z-50 px-20 py-2'>
            <Link  to="/">
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-600 font-bold text-2xl' >Anima<span >Brother</span></h1>
            </Link>
            
            <nav className='flex items-center gap-x-6 text-white'>
                <>
                    <Link to="/meusfavoritos" >
                        <Bookmark className='w-10 p-2 hover:bg-stone-900'/>
                    </Link>
                    
                    <Link to="/listadeAnimes" >
                        <Search className='w-10 p-2 hover:bg-stone-900'/>
                    </Link>
                </> 

                {!currentUser?.isLogged ?
                    <div className='flex flex-col'>
                        <div className='flex w-14 p-2 hover:bg-stone-900 relative'
                            onClick={SeaMenu}
                            >
                            <Person />
                            <CaretDown className='w-5'/>
                            
                        </div>
                        {menu ? <Login/> : ""}
                    </div>
                : 
                    <div className='flex flex-col'>
                        <div className='flex p-2 hover:bg-stone-900 relative'
                            onClick={SeaMenu}>
                            <img
                                src={`${currentUser?.avatar}`} 
                                alt="photoUser" 
                                className="w-8 rounded-full cursor-pointer select-none"
                                />
                            
                            <CaretDown className='w-5'/>
                        </div>
                        {menu ? <Login/> : ""}
                    </div>
                }
                
            </nav>                
        </header>
    );
}