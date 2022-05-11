import styled, { keyframes } from "styled-components";
import {PersonCircle} from '@styled-icons/ionicons-outline'
import {Menu} from '@styled-icons/ionicons-outline'

export const Header = styled.header`
    margin: 0 auto;
    max-width: 1200px;
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: relative;
   
    a{
        text-decoration: none;
    }
    h1{
        font-size:1.5rem;
        color: white;
        text-shadow: 0px 3px 3px black;
    }

    span{
        color: #FFC857;
    }
    
`

export const IconUser = styled(PersonCircle)`
    color: white;
    width: 32px;
    cursor: pointer ;
`
export const Btn = styled.button`
    border: none;
    border-radius: 25%;
    :hover{
        background-color: #3B456B;
    }
`

export const IconMenu = styled(Menu)`
    color: white;
    width: 32px;  
    cursor: pointer ;
    
`

const openmenu = keyframes`
    from{
        right: -100px;
        opacity: 0;
    }

    to{
        right: 40px;
        opacity: 1;
    }
`

export const NavShow = styled.nav`
    position: absolute;
    right: 40px;
    top: 70px;
    
    z-index: 2;    
    animation: ${openmenu} 200ms linear;

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        border: 1px solid black;

        a{
            color: white;
            
            li{
                background-color: #FFC85790;
                padding: 1rem;
                 :hover{
                    background-color: #177E89;
                 }   
            }
        }
        
    }
`
const menuUser = keyframes`
    from{
        left: -70px;
        opacity: 0;
    }

    to{
        left: 40px;
        opacity: 1;
    }
`
export const NavUser = styled.nav`
    position: absolute;
    left: 40px;
    top: 70px;
    
    z-index: 2;   
    animation: ${menuUser} 200ms linear;
`
