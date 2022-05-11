import styled from "styled-components";

export const SectionList = styled.section`
    margin: 0 auto;
    max-width: 1200px;
    max-height: 900px;
    height: 100%;
    
    overflow: hidden scroll;
    ::-webkit-scrollbar{
        width: 6px;
        background-color: #3B456B;
        border-radius: 10px;   
    }
    //barra do scroll
    ::-webkit-scrollbar-thumb {
        background-color: #939AB3;    
        border-radius: 5px;       
}
`


export const Form = styled.form`
        text-align: center;

        p{
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            margin: 0.7rem 0;
            text-shadow: 2px 3px 3px black;
        }
        input{
            border-radius: 10px;
            margin-bottom: 1rem;
            padding: 6px;
            max-width: 400px;
            width: 40vw;

            ::placeholder{
                font-style: italic;
            }
        }
    
`

export const DivListAnim = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 80%;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: inset 7px 7px 7px #00000030;
    overflow: hidden;

    div{
        text-align: center;
        display: grid;
        grid-template-columns: repeat(4, auto);
        place-items: center;
        @media(max-width: 430px){
                display: grid;
                grid-template-columns: repeat(1, auto);
            }
        @media(min-width: 430px) and (max-width: 769px){
            display: grid;
            grid-template-columns: repeat(2, auto);
        }
        
        
            
    }
    
`
export const DivAnim = styled.div`
    a{
        text-decoration: none;
        color: white;
    }

    h1{
        font-size: 1rem;
        text-shadow: 2px 3px 3px black;
    }

    img{
        max-height: 250px;
        height: 100%;
        border-radius: 7px;
        box-shadow: 3px 3px 5px #08000070;
    }
`