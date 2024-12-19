import { Container } from "../container";
import Image from "next/image";

export function Header() {
    return(
            <header className="border-b py-2">
                <Container>
                    <nav className="flex justify-between items-center">
                        <h1 className="text-[28px] font-bold">Beauty<span className="text-[#69B99D]">salon</span></h1>
                        <ul className="flex flex-col sm:flex-row gap-5 text-[18px]">
                            <li className="hidden sm:flex cursor-pointer">Inicio</li>
                            <li className="hidden sm:flex cursor-pointer">Sobre</li>
                            <li className="hidden sm:flex cursor-pointer">Servicos</li>
                            <li className="hidden sm:flex cursor-pointer">Depoimentos</li>
                            <li className="hidden sm:flex cursor-pointer">Contatos</li>
                            <li className="sm:hidden"><Image src={'/Icon.svg'} width={24} height={24} alt="" className="cursor-pointer"/></li>
                        </ul>
                    </nav>
                </Container>
            </header>
    )
}