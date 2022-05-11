import styled from "styled-components";

import {LogIn} from '@styled-icons/ionicons-outline'
import {LogOut} from '@styled-icons/ionicons-outline'

export const IconLogIn = styled(LogIn)`
    color: black;
    width: 16px;
    padding: 5px;
`
export const IconLogOut = styled(LogOut)`
    color: black;
    width: 16px;
    padding: 5px;
`
export const Button = styled.button`
    background-color: #FFC857;
    color: white;
    padding: 3px 5px;
    align-self: center;

    border-radius: 5px;
    border: 1px solid black;

    display: flex;
    align-items: center;

    :hover{
        cursor: pointer;
        background-color: #3B456B;
    }
`