import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Home } from "@/components/home";
import { Servico } from "@/components/servico";

export default function Page() {
  return(
    <div>
      <Header/>
      <Home/>
      <About/>  
      <Servico/>
    </div>
  )
}