import { Header_profile } from "../../components/header_profile/header_profile"
import euuu from "../../assets/euuu.jpeg"
import { Card_product_advertiser } from "../../components/card_product_advertiser/card_product_advertiser"
import { Footer } from "../../components/footer/footer"
import { Modal_create_anouncement } from "../../components/modal_create_anouncement/modal_create_anouncement"

export const ProfileViewAdmin = () => {
    return (
        <>
            <Modal_create_anouncement />
            <Header_profile />
            <div className="h-full w-full min-h-screen bg-gradient-background-product-2 pt-[4.6875rem]">
                <section className="rounded bg-grey10 container-page-user py-11 pl-[2.5625rem] pr-[2.5625rem]">
                    <img src={euuu} className="w-[104px] h-[104px] rounded-[50%] mb-6">
                    </img>
                    <div className="mb-5">
                        <span className="text-grey1 font-lexend text-xl font-semibold mr-[0.5625rem]">
                            Samuel Leão
                        </span>
                        <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                            Anunciante
                        </span>
                    </div>
                    <p className="text-grey2 text-base font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </section>
                <section className="container pb-[4.6875rem]">
                    <h3 className="font-lexend text-2xl font-semibold mb-[5.2856rem] mt-[4.4512rem]">
                        Anúncios
                    </h3>
                    <ul className="flex flex-wrap gap-12 justify-center items-center">
                        <Card_product_advertiser></Card_product_advertiser>
                        <Card_product_advertiser></Card_product_advertiser>
                        <Card_product_advertiser></Card_product_advertiser>
                        <Card_product_advertiser></Card_product_advertiser>
                        <Card_product_advertiser></Card_product_advertiser>
                        <Card_product_advertiser></Card_product_advertiser>
                    </ul>
                </section>
                <Footer>
                </Footer>
            </div>
        </>
    )
}