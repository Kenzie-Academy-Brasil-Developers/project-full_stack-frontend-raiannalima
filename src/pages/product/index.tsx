import { Header_profile } from "../../components/header_profile/header_profile";
import { Card_comment } from "../../components/card_comment/card_comment";
import { Footer } from "../../components/footer/footer";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { AnouncementContext } from "../../providers/AnouncementContext";
import { Header_profile_advertiser } from "../../components/header_profile_advertiser/header_profile_advertiser";
import { Header_home } from "../../components/header_home/header_home";

export const Product = () => {
    const { user } = useContext(UserContext);
    const { anouncementById, comments, getAnouncementById, getCommentsByIdAnouncement } = useContext(AnouncementContext);

    const { id } = useParams()

    useEffect(() => {
        getAnouncementById(id!)
        getCommentsByIdAnouncement(id!)
        console.log(comments)
    }, [])

    // useEffect(() => {
    //     getCommentsByIdAnouncement(id!)
    // }, [])

    return (
        <>
            {
                user?.typeAccount === 'Comprador' ? <Header_profile /> : user?.typeAccount === 'Anunciante' ? <Header_profile_advertiser /> : <Header_home />
            }
            <div className="h-full w-full min-h-screen bg-gradient-background-product">
                <section className="flex container">
                    <main className="w-[90%] mr-[2.875rem]">
                        <div className="w-full bg-grey10 mt-[2.5rem] mb-4 flex justify-center items-center rounded">
                            <img
                                src={anouncementById?.cover_image}
                                className="max-w-[31.25rem] max-h-[18.75rem]"
                            ></img>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.4756rem]">
                            <h2 className="text-grey1 font-lexend text-xl font-semibold mb-[2.5625rem]">
                                {anouncementById?.brand} {anouncementById?.model}
                            </h2>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded mr-[0.75rem]">
                                        {anouncementById?.year}
                                    </span>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                                        {anouncementById?.mileage} KM
                                    </span>
                                </div>
                                <span className="font-lexend text-grey1 text-base font-medium">
                                    R$ {anouncementById?.price}
                                </span>
                            </div>
                            <button
                                type="button"
                                className="h-[2.375rem] py-3 px-5 flex justify-center items-center bg-brand1 rounded font-semibold text-whiteFixed"
                            >
                                Comprar
                            </button>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-4">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Descrição
                            </h3>
                            <p className="max-h-[18.75rem] text-grey2 text-base font-normal max-h-[18.75rem] overflow-y-scroll">
                                {anouncementById?.description}
                            </p>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.0625rem]">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Comentários
                            </h3>
                            <ul className="flex flex-col gap-11">
                                {comments && comments.map((comment) => (
                                    <Card_comment key={comment.id} comment={comment} />
                                ))}
                            </ul>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 relative mb-8">
                            <div className="flex items-center mb-[0.9375rem]">
                                <div className="w-8 h-8 mr-2 flex justify-center items-center bg-brand1 rounded-[50%] text-sm text-whiteFixed font-medium">
                                    {user?.name.charAt(0)}
                                </div>
                                <span className="text-grey1 text-sm font-medium">
                                    {user?.name}
                                </span>
                            </div>
                            <form>
                                <textarea className="w-full min-h-[8rem] border-[2px] border-grey7 relative"></textarea>
                                <button
                                    type="button"
                                    className="absolute h-[2.375rem] py-3 px-5 flex justify-center items-center bg-brand1 rounded font-semibold text-whiteFixed right-[66px] bottom-[51px]"
                                >
                                    Comentar
                                </button>
                            </form>
                        </div>
                    </main>
                    <aside className="w-[90%]">
                        <div className="w-full bg-grey10 mt-[2.5rem] py-7 px-11 rounded">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Fotos
                            </h3>
                            <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-4 max-h-[37.5rem] overflow-y-scroll">
                                {anouncementById?.images.map((image) => (
                                    <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                        <img src={image.image_url}></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full bg-grey10 mt-[2.5rem] py-7 px-11 rounded flex justify-center items-center flex-col">
                            <div className="flex gap-2 items-center">
                                <div className="w-[104px] h-[104px] flex justify-center items-center bg-brand1 rounded-[50%] text-sm text-whiteFixed font-medium mb-[1.75rem]">
                                    {user?.name.charAt(0)}
                                </div>
                                {/* <p className="bg-brand1 rounded-full w-10 h-10 text-center pt-1 text-whiteFixed font-medium ">
                                    TEXTO N˜AO SEI O QUE
                                </p> */}
                            </div>
                            <span className="text-grey1 font-lexend text-xl font-semibold">
                                {anouncementById?.user.name}
                            </span>
                            <p className="my-8 text-grey2 grey2 font-normal max-h-[18.75rem]">
                                {anouncementById?.user.description}
                            </p>
                            <Link
                                type="button"
                                className="py-3 px-7 rounded bg-grey0 text-whiteFixed text-base"
                                to={`/profile-user/${anouncementById?.user.id}`}
                            >
                                Ver todos anúncios
                            </Link>
                        </div>
                    </aside>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};
