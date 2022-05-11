import styled from "styled-components";

import {At} from '@styled-icons/ionicons-outline'

export const SectionFooter = styled.footer`
    margin: auto;
    max-width: 1200px;
    height: 10%;
    color: white;
    text-align: center;
   
    padding: 1rem;
   
    div p{
        font-size: 0.5rem;
    }
    div p span{
        color: black;
    }
`

export const Linklinkedin = styled.a`
    color: white;
    text-decoration: none;
    font-size: 0.5rem;
    
    :hover{
        padding: 5px;
        background-color: #3B456B;
        border-radius: 25px;
    }    
`

export const Icon = styled(At)`
    width: 16px;
    color: #177E89;
`