import styled from "styled-components";
import backgroundImage from "../../assets/img/background.png"

export const MainContainer = styled.div`
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    height: fit-content;
    min-height: 100vh;
    background-color: #000;
`

export const Part1 = styled.div`
    height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
`

export const Part2 = styled.div`
    height: 10vh;
    color: #fff;
    font-size: 4vh;
    padding-left: 2vw;
`

export const Grid = styled.div`
    display: grid;
    width: 80%;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    color: #fff;
    padding: 10vh 0;
    gap: 3vw;
    margin: auto;
`