'use client'
import Image from "next/image";

type testimonialsData = {
    image: string,
    name: string
}

export function TestimonialsCard({image, name}: testimonialsData) {
    return(
        <div className="flex flex-col gap-[20px]">   
            <Image src='/public/Aspas.svg' alt="" width={5} height={5}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas obcaecati error culpa nobis placeat fugit dolores soluta cupiditate, quod blanditiis accusamus tenetur iure qui odio. Officiis ea error non quam.</p>
            <div>
                <Image src={image} width={32} height={32} alt="avatar" className="rounded-full"/>
                <p>{name}</p>
            </div>
        </div>
    )
}