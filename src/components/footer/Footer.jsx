import { useSelector } from "react-redux"


export function Footer(){
    const page = useSelector((state) => state.page.value)
    
    return(
        <footer>
            <h1 style={{margin: 0}}>Footer: {page}</h1>
        </footer>
    )
}