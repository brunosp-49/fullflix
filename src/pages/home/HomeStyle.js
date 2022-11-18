import styled from "styled-components";
import background from "../../assets/img/background.png"


export const HomePai = styled.div`
    background-color: #000;
    margin: 0;
    color: #fff;
    .alignDiv{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Part1 = styled.div`
    height: 100vh;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
`
export const Part2 = styled.div`
    background-color: #000;
    height: 10vh;
    font-size: 4vh;
    display: flex;
    padding-left: 2vw;
    p{
        margin: 0;
    }
    align-items: center;
`
// export const HomePai = styled.div`
//     background-color: #000;
//     margin: 0;
//     color: #fff;
// `
// export const HomePai = styled.div`
//     background-color: #000;
//     margin: 0;
//     color: #fff;
// `