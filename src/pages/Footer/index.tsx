import {At} from '@styled-icons/ionicons-outline'
export default function Footer(){
    return(
        <footer className='flex flex-col justify-center items-center p-4'>
            <div className='flex flex-col items-center text-xs text-white'>
                <p>Anime<span className='text-amber-600'>Brother</span></p>
                <p>&copy;Copyright 2022 - Todos os direitos reservados </p>
            </div>
                <a href='https://www.linkedin.com/in/lucas-curty/' 
                    target="_blank" rel="Linkedinlink noreferrer" 
                    className='text-white text-xs p-1 rounded hover:bg-amber-600 hover:text-white' 
                    >
                    Feito por <At className='w-4 hover:text-blue-700'/>Lucas Curty
                </a>      
        </footer>
    )

}