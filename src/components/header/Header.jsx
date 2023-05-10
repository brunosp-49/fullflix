import { useSelector } from "react-redux"
import { MainContainer } from "./HeaderStyle"



export const Header = () =>{
    const data = useSelector((state) => state.fullflix.movie)

    return(
        <MainContainer>
            <p>{data.title}</p>
        </MainContainer>
    )
}