import { MainContainer } from "./FooterStyle";


export function Footer({text}){
    return(
        <MainContainer>
            <p>FULLFLIX ® 2022, Todos os direitos reservados. | {text}</p>
        </MainContainer>
    )
}