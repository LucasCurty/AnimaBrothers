// import pages area
import Main from "../Pages/Main/index"
import ActualAnime from "../Pages/Main/ActualAnime/index"
import ListadeAnimes from "../Pages/Main/ListadeAnimes/index"
import Header from "../Pages/Header"
import Footer from "../Pages/Footer"
import Meusfavoritos from "../Pages/Main/Meusfavoritos/index"

//import react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function AppRouters(){
    return(   
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/actualanime/:animeId" element={<ActualAnime />}  />
                <Route path="/listadeAnimes" element={<ListadeAnimes />} />
                <Route path="/meusfavoritos" element={<Meusfavoritos />} />
            </Routes>
            <Footer/> 
         </BrowserRouter>
)
}