'use client'

import { useState } from "react";
import { Container } from "../container";
import Image from "next/image";

export function Header() {

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return(
            <header className="border-b py-7  mb-[62px]">
                <Container>
                    <nav className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold">Beauty<span className="text-[#69B99D]">salon</span></h1>
                        <ul className={'flex flex-col sm:flex-row gap-5 text-[18px]'}> 
                            <li className='hidden sm:flex cursor-pointer'>Inicio</li>
                            <li className="hidden sm:flex cursor-pointer">Sobre</li>
                            <li className="hidden sm:flex cursor-pointer">Servicos</li>
                            <li className="hidden sm:flex cursor-pointer">Depoimentos</li>
                            <li className="hidden sm:flex cursor-pointer">Contatos</li>
                            <li className="sm:hidden" onClick={handleClick}><Image src={'/Icon.svg'} width={24} height={24} alt="" className="cursor-pointer"/></li>
                        </ul>
                    </nav>

                    <div 
                    className={`bg-[#fff] w-full h-[100vh] absolute top-0 left-0 z-50
                    ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    ${menu ? 'pointer-events-auto' : 'pointer-events-none'}
                    transition-all duration-500 ease-in-out`}>
                    <div className="flex justify-end p-[1rem]">
                        <Image src={'/CloseIcon.svg'} width={24} height={24} alt='' className="cursor-pointer" onClick={handleClick}></Image>
                    </div>
                    <nav>
                        <ul className="flex flex-col items-center h-[80vh] justify-center gap-[2rem] text-[1.875rem] font-bold">
                            <li className="cursor-pointer">Inicio</li>
                            <li className="cursor-pointer">Sobre</li>
                            <li className="cursor-pointer">Serviços</li>
                            <li className="cursor-pointer">Depoimentos</li>        
                            <li className="cursor-pointer">Contato</li>
                        </ul>
                    </nav>
                </div>
                </Container>
            </header>
    )
}