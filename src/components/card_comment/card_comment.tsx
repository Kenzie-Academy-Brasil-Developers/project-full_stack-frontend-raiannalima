import avatar from "../../assets/avatar.png";

export const Card_comment = () => {

    return (
        <li>
            <div className="">
                <img src={avatar}>
                </img>
                <span>
                    Júlia Lima
                </span>
                <span>
                    •  há 3 dias
                </span>
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </li>
    )
}