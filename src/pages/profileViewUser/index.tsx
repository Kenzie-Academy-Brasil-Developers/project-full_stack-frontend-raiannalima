import { Header_profile } from "../../components/header_profile/header_profile"
import { Card_product } from "../../components/card_product/card_product"
import { Footer } from "../../components/footer/footer"
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { AnouncementContext } from "../../providers/AnouncementContext";
import { Modal_edit_perfil } from "../../components/modal_edit_perfil/modal_edit_perfil";
import { Header_profile_advertiser } from "../../components/header_profile_advertiser/header_profile_advertiser";
import { Header_home } from "../../components/header_home/header_home";
import { useParams } from "react-router-dom";

export const ProfileViewUser = () => {
    const { user, isModalEditUserOpen } = useContext(UserContext);
    const { anouncementsAdvertiser, getAnouncementsAdvertiser } = useContext(AnouncementContext);

    const { id } = useParams();

    if (anouncementsAdvertiser) {
        console.log(anouncementsAdvertiser[0])
    }

    useEffect(() => {
        getAnouncementsAdvertiser(id!)
    }, [])

    return (
        <>
            {
                user?.typeAccount === 'Comprador' ? <Header_profile /> : user?.typeAccount === 'Anunciante' ? <Header_profile_advertiser /> : <Header_home />
            }

            {
                isModalEditUserOpen ? (
                    <Modal_edit_perfil title={"Editar perfil."} />
                ) : null
            }
            <div className="h-full w-full min-h-screen bg-gradient-background-product-2 pt-[4.6875rem]">
                <section className="rounded bg-grey10 container-page-user py-11 pl-[2.5625rem] pr-[2.5625rem]">
                    <div className="w-[104px] h-[104px] flex justify-center items-center bg-brand1 rounded-[50%] mb-6 text-4xl text-whiteFixed font-medium">
                        {anouncementsAdvertiser && anouncementsAdvertiser[0].user.name.charAt(0)}
                    </div>
                    <div className="mb-5">
                        <span className="text-grey1 font-lexend text-xl font-semibold mr-[0.5625rem]">
                            {anouncementsAdvertiser && anouncementsAdvertiser[0].user.name}
                        </span>
                        <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                            {anouncementsAdvertiser && anouncementsAdvertiser[0].user.typeAccount}
                        </span>
                    </div>
                    <p className="text-grey2 text-base font-normal">
                        {anouncementsAdvertiser && anouncementsAdvertiser[0].user.description}
                    </p>
                </section>
                <section className="container pb-[4.6875rem]">
                    <h3 className="font-lexend text-2xl font-semibold mb-[5.2856rem] mt-[4.4512rem]">
                        Anúncios
                    </h3>
                    <ul className="flex flex-wrap gap-12 justify-center items-center">
                        {
                            anouncementsAdvertiser?.map((anouncement) => (
                                <Card_product anouncement={anouncement} key={anouncement.brand}></Card_product>
                            ))
                        }
                    </ul>
                </section>
                <Footer />
            </div>
        </>
    )
}