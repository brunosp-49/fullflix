import styled from "styled-components";


export const Grid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    width: 80vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3vw;
    padding: 10vh 0;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    :hover{
        cursor: pointer;
        border: 1px solid #e50914;
    }
    img{
        width: 100%;
        height: 80%;
    }
    .infoContainer{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 20%;
        align-self: center;
        font-size: 2vh;
    }
`