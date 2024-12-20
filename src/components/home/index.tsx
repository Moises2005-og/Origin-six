'use client'
import Image from "next/image";
import { Container } from "../container";

export function Home() {
    return(
        <div className="flex flex-col sm:flex-row-reverse justify-between mb-2">
            <div className='sm:w-[324px]'>
                <div className="relative h-[290px] w-full">
                    <Image src={'/hairWomen.svg'} width={334} height={224} alt='' className="absolute left-0 top-5 z-10 rounded"></Image>
                    <div className="bg-[#CCF4E6] h-[242px] w-[347px] absolute right-0 -top-5 z-0 rounded"></div>
                </div>
            </div>
            
            <Container>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-center font-bold text-[30px]">Saude natural para os seus cabelos</h2>
                    <p className="text-center font-[400] text-[#767676]">Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                    <button className="bg-[#69B99D] text-[#fff] p-[17px] rounded cursor-pointer">Agendar um horario</button>
                </div>
            </Container>
        </div>
    )
}