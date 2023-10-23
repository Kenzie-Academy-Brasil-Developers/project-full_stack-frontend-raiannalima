import { Header_profile } from "../../components/header_profile/header_profile";
import avatar from "../../assets/avatar.png";
import { Card_comment } from "../../components/card_comment/card_comment";
import { Footer } from "../../components/footer/footer";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const Product = () => {
    const { user } = useContext(UserContext);
    const [reduceName, setReduceName] = useState("");
    const { id } = useParams();

    const car = {
        brand: "Mercedes",
        model: "A 200",
        year: 2013,
        mileage: 80000,
        color: "White",
        price_fipe: 60000,
        price: 50000,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nisl tristique, elementum elit et, efficitur neque. Phasellus accumsan urna.",
        cover_image:
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
        images: [
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
            "https://gambarmobil.com/foto/mercedes-benz/333011-a-class-mercedes-benz-a200-2013-screenshot-20221216-091354.jpg",
        ],
        user: { id: 27, name: "marcio", description: "lorem infinito" },
        comments: [
            {
                id: 1,
                value: "Carro muito bom ",
                user: { id: 1, name: "felipe" },
                date: "20/05/2023",
            },
            {
                id: 2,
                value: "top d+ ",
                user: { id: 2, name: "andre" },
                date: "05/08/2023",
            },
            {
                id: 3,
                value: "Vou comprar logo ",
                user: { id: 3, name: "Marques" },
                date: "22/09/2023",
            },
        ],
    };
    // useEffect(() => {
    //     if (car) {
    //         const name = car.user.name.split(" ");
    //         setReduceName(name[0][0] + name[0][1]);
    //     }
    // }, [car]);

    return (
        <>
            <Header_profile></Header_profile>
            <div className="h-full w-full min-h-screen bg-gradient-background-product">
                <section className="flex container">
                    <main className="w-[90%] mr-[2.875rem]">
                        <div className="w-full bg-grey10 mt-[2.5rem] mb-4 flex justify-center items-center rounded">
                            <img
                                src={car.cover_image}
                                className="max-w-[31.25rem] max-h-[18.75rem]"
                            ></img>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.4756rem]">
                            <h2 className="text-grey1 font-lexend text-xl font-semibold mb-[2.5625rem]">
                                {car.brand} {car.model}
                            </h2>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded mr-[0.75rem]">
                                        {car.year}
                                    </span>
                                    <span className="py-1 px-2 bg-brand4 text-brand1 text-sm font-medium rounded">
                                        {car.mileage} KM
                                    </span>
                                </div>
                                <span className="font-lexend text-grey1 text-base font-medium">
                                    R$ {car.price}
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
                            <p className="text-grey2 text-base font-normal max-h-[18.75rem] overflow-y-scroll">
                                {car.description}
                            </p>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 mb-[2.0625rem]">
                            <h3 className="text-grey1 font-lexend text-xl font-semibold mb-8">
                                Comentários
                            </h3>
                            <ul className="flex flex-col gap-11">
                                {car.comments.map((coment) => (
                                    <Card_comment key={coment.id} comment={coment} />
                                ))}
                            </ul>
                        </div>
                        <div className="w-full bg-grey10 rounded py-7 px-11 relative mb-8">
                            <div className="flex items-center mb-[0.9375rem]">
                                <img src={avatar} className="mr-[0.5rem]"></img>
                                <span className="text-grey1 text-sm font-medium">
                                    {user?.name}
                                </span>
                            </div>
                            <textarea className="w-full min-h-[8rem] border-[2px] border-grey7 relative"></textarea>
                            <button
                                type="button"
                                className="absolute h-[2.375rem] py-3 px-5 flex justify-center items-center bg-brand1 rounded font-semibold text-whiteFixed right-[66px] bottom-[51px]"
                            >
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
                                {car.images.map((image) => (
                                    <div className="w-[6.75rem] h-[6.75rem] bg-grey7 flex justify-center items-center p-1.5 rounded">
                                        <img src={image}></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full bg-grey10 mt-[2.5rem] py-7 px-11 rounded flex justify-center items-center flex-col">
                            <div className="flex gap-2 items-center -ml-8 mr-4 ">
                                <p className="bg-brand1 rounded-full w-10 h-10 text-center pt-1 text-whiteFixed font-medium ">
                                    {reduceName}
                                </p>
                            </div>
                            <span className="text-grey1 font-lexend text-xl font-semibold">
                                {car.user.name}
                            </span>
                            <p className="my-8 text-grey2 grey2 font-normal">
                                {car.user.description}
                            </p>
                            <Link
                                type="button"
                                className="py-3 px-7 rounded bg-grey0 text-whiteFixed text-base"
                                to={`/profile-advertiser/${car.user.id}`}
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