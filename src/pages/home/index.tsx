import { Card_product } from "../../components/card_product/card_product"
import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"
import { StyledContainer, StyledGradient } from "./style"

export const Home = () => {
    return (
        <>
            <Header_home />
            <StyledContainer>
            </StyledContainer>
            <StyledGradient>
                <h1 className="font-lexend">
                    Motors Shop
                </h1>
                <p className="font-lexend">
                    A melhor plataforma de anúncios de carros do país
                </p>
            </StyledGradient>
            <div className="mt-[4.1875rem] mb-[4.1875rem]">
                <ul className="container flex flex-wrap gap-12 justify-center items-center">
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                    <Card_product></Card_product>
                </ul>
            </div>
            <Footer></Footer>
        </>
    )
}


{/* <div className="w-full h-[544px] flex justify-center items-center">
<h1> Isso é um teste </h1>
</div> */}