import MaisVistos from './Components/MaisVistos'
import LancamentosFuturos from './Components/LancamentosFuturos'
import TopManga from './Components/TopManga'
import TopDez from './Components/TopDez'

export default function Main(){    
    return(
        <main className='container mx-auto pt-20'>         
           <MaisVistos />
           <LancamentosFuturos /> 
           <TopDez />
           <TopManga />
        </main>
    )
}