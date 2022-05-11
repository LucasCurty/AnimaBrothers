
import MaisVistos from './Components/MaisVistos'
import UltimosLancamentos from './Components/UltimosLancamentos'



import * as styled from './styled'

export default function Main(){

    
    return(
        <styled.SectionMain>
           <MaisVistos />
           <UltimosLancamentos />
        </styled.SectionMain>
    )
}