import { Header_profile } from "../../components/header_profile/header_profile"
import car_product_big from "../../assets/car_product_big.png"
import avatar from "../../assets/avatar.png"

export const Product = () => {
    return (
        <>
            <Header_profile>
            </Header_profile>
            <div className="border-4 border-orange-950 h-full w-full min-h-screen bg-gradient-background-product">
                <section>
                    <main>
                        <div>
                            <img src={car_product_big}></img>
                        </div>
                        <div>
                            <h2>
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
                            </h2>
                            <div>
                                <div>
                                    <span>
                                        2013
                                    </span>
                                    <span>
                                        0 KM
                                    </span>
                                </div>
                                <span>
                                    R$ 00.000,00
                                </span>
                            </div>
                            <button type="button">
                                Comprar
                            </button>
                        </div>
                        <div>
                            <h3>
                                Descrição
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </div>
                        <div>
                            <h3>
                                Comentários
                            </h3>
                            <ul>

                            </ul>
                        </div>
                        <div>
                            <div>
                                <img src={avatar}>
                                </img>
                                <span>
                                    Samuel Leão
                                </span>
                            </div>
                            <textarea>
                                <button type="button"></button>
                            </textarea>
                        </div>
                    </main>
                    <aside>

                    </aside>
                </section>
            </div>
        </>
    )
}