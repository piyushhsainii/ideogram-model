import { cn } from "../../lib/utils";

export const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {

    return (
        <>
            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl   ",
                    " bg-primmaryColor  hover:bg-black text-gray-500"
                )}
            >
                <div className="flex flex-row items-center gap-2 font-sans mb-2 p-4 bg-black">
                    <img className="rounded-full" width="28" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium text-gray-500">
                            {name}
                        </figcaption>
                        <p className="text-sm font-medium text-gray-500 font-sans">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm font-medium text-gray-500 p-1 px-4  font-sans">{body}</blockquote>
            </figure>
        </>
    );
};