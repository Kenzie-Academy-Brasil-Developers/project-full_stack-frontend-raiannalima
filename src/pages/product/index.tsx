import { Header_profile } from "../../components/header_profile/header_profile"
import car_product_big from "../../assets/car_product_big.png"
import avatar from "../../assets/avatar.png"
import { Card_comment } from "../../components/card_comment/card_comment"
import euuu from "../../assets/euuu.jpeg"
import { Footer } from "../../components/footer/footer"

export const Product = () => {
    return (
        <>
            <Header_profile>
            </Header_profile>
            <div className="h-full w-full min-h-screen bg-gradient-background-product">
                <section className="flex container">
                    <main className="w-[90%] mr-[2.875rem]">
                        <div className="w-full bg-grey10 mt-[2.5rem] mb-4 flex justify-center items-center rounded">
                            <img src={car_product_big} className="max-w-[31.25rem] max-h-[18.75rem]"></img>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.4756rem]">
                            <h2 className="text-grey1 font-lexend text-xl font-semibold mb-[2.5625rem]">
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                            </h2>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium mr-[0.75rem]">
                                        2013
                                    </span>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium">
                                        0 KM
                                    </span>
                                </div>
                                <span className="font-lexend text-grey1 text-base font-medium">
                                    R$ 00.000,00
                                </span>
                            </div>
                            <button type="button" className="h-[2.375rem] py-3 px-5 flex justify-center items-center bg-brand1 rounded font-semibold text-whiteFixed">
                                Comprar
                            </button>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-4">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Descrição
                            </h3>
                            <p className="text-grey2 text-base font-normal max-h-[18.75rem] overflow-y-scroll">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.0625rem]">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Comentários
                            </h3>
                            <ul className="flex flex-col gap-11">
                                <Card_comment></Card_comment>
                                <Card_comment></Card_comment>
                                <Card_comment></Card_comment>
                                <Card_comment></Card_comment>
                            </ul>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 relative mb-8">
                            <div className="flex items-center mb-[0.9375rem]">
                                <img src={avatar} className="mr-[0.5rem]">
                                </img>
                                <span className="text-grey1 text-sm font-medium">
                                    Samuel Leão
                                </span>
                            </div>
                            <textarea className="w-full min-h-[8rem] border-[2px] border-grey7 relative">
                            </textarea>
                            <button type="button" className="absolute h-[2.375rem] py-3 px-5 flex justify-center items-center bg-brand1 rounded font-semibold text-whiteFixed right-[66px] bottom-[51px]">
                                Comentar
                            </button>
                        </div>
                    </main>
                    <aside className="w-[90%]">
                        <div className="w-full bg-grey10 mt-[2.5rem] py-7 px-11 rounded">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Fotos
                            </h3>
                            <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-4 max-h-[37.5rem] overflow-y-scroll">
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                                <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                    <img src={car_product_big}></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-grey10 mt-[2.5rem] py-7 px-11 rounded flex justify-center items-center flex-col">
                            <img src={euuu} className="rounded-[50%] w-[104px] h-[104px] mb-7"></img>
                            <span className="text-grey1 font-lexend text-xl font-semibold">
                                Samuel Leão
                            </span>
                            <p className="my-8 text-grey2 grey2 font-normal">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's.
                            </p>
                            <button type="button" className="py-3 px-7 rounded bg-grey0 text-whiteFixed text-base">
                                Ver todos anúncios
                            </button>
                        </div>
                    </aside>
                </section>
            </div>
            <Footer>
            </Footer>
        </>
    )
}