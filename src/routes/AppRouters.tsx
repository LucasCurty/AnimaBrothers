// import pages area
import Main from "../pages/Main/Main"
import ActualAnime from "../pages/Main/ActualAnime"
import ListadeAnimes from "../pages/Header/ListadeAnimes"
import Header from "../pages/Header/Header"
import Footer from "../pages/Footer"
import Meusfavoritos from "../pages/Header/MeusFavoritos" 

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