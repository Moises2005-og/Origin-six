import Image from "next/image";

type data = {
    src: string,
    title: string,
    content: string
}

export function Card({src, title, content}: data) {
    return(
        <div className="flex flex-col gap-2 shadow-md border-b-[5px] border-b-[#69B99D] p-5 mb-3 justify-center items-center rounded w-[352px] h-[352px]">
            <Image src={src} alt="" width={80} height={80}/>
            <h1 className="text-[24px] font-bold">{title}</h1>
            <p className="text-[16px] text-[#767676]">{content}</p>
        </div>
    )
}