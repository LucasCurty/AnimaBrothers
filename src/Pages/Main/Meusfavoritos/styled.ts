import styled from "styled-components";
import {HeartDislike} from '@styled-icons/ionicons-outline'

export const Section = styled.section`
    margin: 0 auto;
    max-width: 1200px;
    overflow-y: hidden;
    height: 80vh;
    
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, auto) ;
        overflow-y: scroll;
        height: 100%;

        box-shadow: inset 7px 7px 7px #00000030;
        border-radius: 7px;
        @media(max-width: 430px){
                display: grid;
                grid-template-columns: repeat(1, auto);
            }
        @media(min-width: 430px) and (max-width: 769px){
                display: grid;
                grid-template-columns: repeat(2, auto);
            }
        ::-webkit-scrollbar{
        width: 4px;
        background-color: white;
        border-radius: 10px;    
        }
        //barra do scroll
        ::-webkit-scrollbar-thumb {
            background-color: #3B456B;    
            border-radius: 5px;       
        }
    }
    li{
        text-align: center;
        a{
            color: white;
            text-decoration: none;
            img{
                min-width: 150px;
            }
        }
    }
    img{
        width: 100%;
        max-width: 200px;
    }
    button{
        padding: 3px;
        margin-left: -30px;
        background-color: darkorange;
        border-radius: 3px;
        opacity: 0.7;
        &:hover{
            cursor: pointer;
            opacity: 1;
        }
    }
`
export const Icon = styled(HeartDislike)`
    width: 22px;
    color: white;
`