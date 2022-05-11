import styled from "styled-components";
import {ArrowRedo} from '@styled-icons/ionicons-outline'


export const Section = styled.section`
    
    h2{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        
        background-color: #177E89;
        color: white;
        border-radius: 25px;
        
        padding: 0.5rem 1rem;
        margin: 1rem 2rem;
        font-size: 0.7rem;
        }
    
    `
export const IconArrow = styled(ArrowRedo)`
    color: white;
    width: 16px;
    margin-left: 1rem;
`
