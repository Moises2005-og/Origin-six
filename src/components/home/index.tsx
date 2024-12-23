'use client'
import Image from "next/image";
import { Container } from "../container";
import { Degrade } from "../degrade";

export function Home() {
    return(
        <div className="flex flex-col sm:flex-row-reverse justify-between mb-16">
            <div className='sm:w-[450px] sm:px-5'>
                <div className="relative h-[290px] w-full">
                    <Image src={'/hairWomen.svg'} width={334} height={224} alt='' className="absolute left-0 top-5 z-10 rounded"></Image>
                    <div className="bg-[#CCF4E6] h-[242px] w-[347px] absolute right-0 -top-5 z-0 rounded"></div>
                </div>
            </div>
            
            <Container>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="font-bold text-[40px]">Saude natural para</h2>
                    <h2 className="font-bold text-[40px]">os seus cabelos</h2>
                    <p className="text-center sm:text-start font-[400] text-[#767676] text-[18px]">Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                    <button className="bg-[#69B99D] text-[#fff] text-[18px] p-[17px] rounded cursor-pointer hover:bg-[#69b99da4] transition ease-in-out duration-300">Agendar um horario</button>
                </div>
            </Container>

            <Degrade order={true}/>
        </div>
    )
}