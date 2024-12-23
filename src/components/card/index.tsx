import Image from "next/image";

type data = {
    src: string,
    title: string,
    content: string
}

export function Card({src, title, content}: data) {
    <div className="flex flex-col gap-2 shadow-md border-bottom border-[#69B99D]">
        <Image src={src} alt="" width={80} height={80}/>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
}