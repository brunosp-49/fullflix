import styled from "styled-components";
import { Link } from "react-router-dom";


export const MainContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    :hover{
        cursor: pointer;
        border-color: red;
    }
    .infoContainer{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 27%;
        align-self: center;
        font-size: 2vh;
    }
    .img{
        width: 100%;
        height: 80%;
    }
`