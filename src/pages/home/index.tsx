import { Card_product } from "../../components/card_product/card_product"
import { Footer } from "../../components/footer/footer"
import { Header_home } from "../../components/header_home/header_home"
import { StyledContainer, StyledGradient } from "./style"
import { useContext } from "react";
import { AnouncementContext } from "../../providers/AnouncementContext";

export const Home = () => {
    const { anouncements } = useContext(AnouncementContext);

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
                    {
                        anouncements?.map((anouncement) => (
                            <Card_product anouncement={anouncement} key={anouncement.brand}></Card_product>
                        ))
                    }
                    {/* <Card_product></Card_product>
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
                    <Card_product></Card_product> */}
                </ul>
            </div>
            <Footer></Footer>
        </>
    )
}
