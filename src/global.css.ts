import styled,{createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  
`
export const SectionMain = styled.main`   
    margin: 0 auto;
    height: 100%;
    background-color: #323031;
    
`