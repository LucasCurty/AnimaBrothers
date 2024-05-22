import MaisVistos from './Components/MaisVistos'
import UltimosLancamentos from './Components/UltimosLancamentos'

export default function Main(){    
    return(
        <main className='container mx-auto pt-20'>         
           <MaisVistos />
           <UltimosLancamentos />
           <UltimosLancamentos />
        </main>
    )
}