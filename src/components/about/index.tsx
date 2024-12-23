import Image from "next/image";
import { Container } from "../container";

export function About() {
    return(
        <div className="flex flex-col sm:flex-row sm:items-center relative mb-16">
            <div className="h-[350px] sm:w-[1250px]">
                <div className="bg-[#CCF4E6] w-[70%] sm:w-[20%] h-[300px] absolute top-0"></div>
                <Image src={'/haircutWomen.svg'} alt="" width={380} height={240} className="absolute top-8 w-full sm:w-[450px]"/>
            </div>
            <Container>
                <h2 className="text-[30px] font-bold">Sobre nós</h2>
                <p className="text-[16px] font-[400] text-[#767676] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
                </p>

                <p className="text-[16px] font-[400] text-[#767676] mb-4">
                    In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 
                </p>

                <p className="text-[16px] font-[400] text-[#767676] mb-4">
                    Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
                </p>
            </Container>
        </div>
    )
}