import styled from 'styled-components';
import car from "../../assets/car.png";

export const StyledContainer = styled.div`
    width: 100%; 
    height: 544px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${car}), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(204,208,209,1) 100%);
    background-repeat: no-repeat;
    background-position: bottom center;

    h1 {
        color: #fdfdfd;
        font-size: 2.75rem;
        font-weight: 700;
    }

    p {
        color: #fdfdfd;
        font-size: 2.25rem;
        font-weight: 600;
    }
`

export const StyledGradient = styled.div`
    width: 100%; 
    height: 544px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.28755252100840334) 100%);
    position: absolute;
    top: 80px;

    h1 {
        color: #fdfdfd;
        font-size: 2.75rem;
        font-weight: 700;
    }

    p {
        color: #fdfdfd;
        font-size: 2.25rem;
        font-weight: 600;
    }
`