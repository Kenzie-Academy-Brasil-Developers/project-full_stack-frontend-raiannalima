import { IComment } from "../../interfaces";

interface IPropComment {
    comment: IComment;
}

export const Card_comment = ({ comment }: IPropComment) => {

    console.log("comment card:")
    console.log(comment);

    return (
        <li>
            <div className="flex items-center mb-3">
                <div className="w-[32px] h-[32px] mr-[0.5rem] flex justify-center items-center bg-brand1 rounded-[50%] text-sm text-whiteFixed font-medium">
                    {comment.user?.name.charAt(0)}
                </div>
                <span className="mr-[0.5rem] text-grey1 text-sm font-medium">
                    {comment.user.name}
                </span>
                <span className="text-grey3 font-normal text-xs">
                    •  há 3 dias
                </span>
            </div>
            <p className="text-grey2 text-sm font-normal max-h-[12.5rem] overflow-y-scroll">
                {comment.comment}
            </p>
        </li>
    )
}