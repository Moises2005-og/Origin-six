'use client'
import { Card } from "../card"
import { Container } from "../container"        

export function Servico() {
    return(
        <Container>
            <div className="flex flex-col items-center gap-5 mb-16">
                <h2 className="text-[40px] font-bold">Servicos</h2>
                <p className="mb-5 text-center text-[18px] font-[500]">Com mais de 10 anos no mercado, o <span className="text-[#69B99D]">Beautysalon</span> já <br /> conquistou clientes de inúmeros países com seus <br /> tratamentos exclusivos e totalmente naturais</p>
                <div className="flex flex-col sm:flex-row gap-8 rounded-sm">
                    <Card title="Terapia capilar" src="/icone-hair.svg" content="Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos."/>
                    <Card title="Cortes" src="/cissor.svg" content="A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos." />
                    <Card title="Tratamentos" src="/products-icon.svg" content="O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo 
de cabelo." />
                </div>
            </div>
        </Container>
    )
} 