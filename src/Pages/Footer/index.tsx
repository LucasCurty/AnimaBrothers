import * as styled from './styled'

export default function Footer(){
    return(
        <styled.SectionFooter>
            <div>
                <p>Anime<span>Brother</span></p>
                <p>&copy;Copyright 2022 -- Todos os direitos reservados </p>
            </div>
            <div>
          
                <styled.Linklinkedin 
                    href='https://www.linkedin.com/in/lucas-curty/' 
                    target="_blank"
                >
                    Feito por <styled.Icon />Lucas Curty
                </styled.Linklinkedin>

            </div>
        </styled.SectionFooter>
    )

}