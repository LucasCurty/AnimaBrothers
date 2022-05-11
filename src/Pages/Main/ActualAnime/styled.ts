import styled from "styled-components";

import {Flame} from '@styled-icons/ionicons-outline'

export const SectionAnime = styled.section`
    padding-bottom: 1rem;
    height: 80%;

    h1{
        text-align: center;
        margin: 0;
        padding: 1rem;
        color: white;
        text-shadow: 2px 3px 3px black;
    }   
`
export const IconHeart = styled(Flame)`
    color: white;
    width: 22px;
    padding: 3px 0px;
    font-weight: bolder;
`

export const DivImg = styled.div`
    width: fit-content;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    img{
        border-radius: 5px;
        margin: 5px;
    }
    button{
        background-color: #DB3A34;
        border-radius: 10px;
        border: 1px solid black;
        opacity: 0.8;
        :hover{ 
            opacity: 1;
            cursor: pointer;
        }
    }
    `

export const DivInfo = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
    text-align: left;
    color: white;
    text-shadow: 2px 3px 3px black;

    ;
    p{
        padding: 0.5rem;
    }

    span{
        color: white;
        background-color: #177E89;
        
        text-shadow: none;
        box-shadow: 1px 1px 3px #ffffff9c;
        border-radius: 5px;
        
        margin-left: 1rem;
        padding: 0.4rem; 

        font-size: 0.8rem;
        font-weight: 600;

    }
`
export const DivAbout = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 150px;

    margin: 1rem auto;
    text-align: justify;
    padding: 1rem;

    background-color: #084C61;
    color: white;
    
    box-shadow: 3px 3px 10px #AAAAAA70;
    border-radius: 5px;

    overflow: hidden scroll;
    //scroll bar e fundo dele
    ::-webkit-scrollbar{
        width: 4px;
        background-color: #939AB3;
        border-radius: 10px;    
    }
    //barra do scroll
    ::-webkit-scrollbar-thumb {
        background-color: #3B456B;    
        border-radius: 5px;       
}
`
