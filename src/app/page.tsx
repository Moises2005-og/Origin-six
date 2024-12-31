import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
import { Servico } from "@/components/servico";
import { Testimonials } from "@/components/testimonials";

export default function Page() {
  return(
    <div>
      <Header/>
      <Home/>
      <About/>  
      <Servico/>
      <Testimonials/>
    </div>
  )
}