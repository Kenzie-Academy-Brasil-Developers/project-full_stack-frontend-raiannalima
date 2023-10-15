import avatar from "../../assets/avatar.png";

export const Card_comment = () => {

    return (
        <li>
            <div className="flex items-center mb-3">
                <img src={avatar} className="w-[32px] h-[32px] mr-[0.5rem]">
                </img>
                <span className="mr-[0.5rem] text-grey1 text-sm font-medium">
                    Júlia Lima
                </span>
                <span className="text-grey3 font-normal text-xs">
                    •  há 3 dias
                </span>
            </div>
            <p className="text-grey2 text-sm font-normal max-h-[12.5rem] overflow-y-scroll">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </li>
    )
}