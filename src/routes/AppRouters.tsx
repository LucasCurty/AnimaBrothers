// import pages area
import Main from "../pages/Main/index"
import ActualAnime from "../pages/Main/ActualAnime/index"
import ListadeAnimes from "../pages/Main/ListadeAnimes/index"
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import Meusfavoritos from "../pages/Main/Meusfavoritos/index" 

//import react-router-dom
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

export default function AppRouters(){
    return(   
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/actualanime/:IdAnime" element={<ActualAnime />}  />
                <Route path="/listadeAnimes" element={<ListadeAnimes />} />
                <Route path="/meusfavoritos" element={<Meusfavoritos />} />

                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
            <Footer/> 
         </BrowserRouter>
)
}