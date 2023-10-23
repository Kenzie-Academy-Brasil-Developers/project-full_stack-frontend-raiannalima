import { Header_profile } from "../../components/header_profile/header_profile";
import avatar from "../../assets/avatar.png";
import { Card_product_advertiser } from "../../components/card_product_advertiser/card_product_advertiser";
import { Footer } from "../../components/footer/footer";
import { Modal_create_anouncement } from "../../components/modal_create_anouncement/modal_create_anouncement";
import { useContext } from "react";
import { AnouncementContext } from "../../providers/AnouncementContext";
import { UserContext } from "../../providers/UserContext";

export const ProfileViewAdmin = () => {
    const { user } = useContext(UserContext);

    const { isModalCreateOpen, openModalCreate } = useContext(AnouncementContext);

    return (
        <>
            {isModalCreateOpen ? (
                <Modal_create_anouncement title={"Criar Anuncio"} />
            ) : null}
            <Header_profile />
            <div className="h-full w-full min-h-screen bg-gradient-background-product-2 pt-[4.6875rem]">
                <section className="rounded bg-grey10 container-page-user py-11 pl-[2.5625rem] pr-[2.5625rem]">
                    <div className="w-[104px] h-[104px] flex justify-center items-center bg-brand1 rounded-[50%] mb-6 text-4xl text-whiteFixed font-medium">
                        {user?.name.charAt(0)}
                    </div>
                    <div className="mb-5">
                        <span className="text-grey1 font-lexend text-xl font-semibold mr-[0.5625rem]">
                            {user?.name}
                        </span>
                        <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                            {user?.typeAccount}
                        </span>
                    </div>
                    <p className="text-grey2 text-base font-normal mb-[2.4375rem]">
                        {user?.description}
                    </p>
                    <button onClick={openModalCreate} className="rounded border-2 border-brand1 text-brand1 font-semibold py-3 px-7">
                        Criar anuncio
                    </button>
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
                <Footer></Footer>
            </div>
        </>
    );
};