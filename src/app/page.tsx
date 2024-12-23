import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Home } from "@/components/home";

export default function Page() {
  return(
    <div>
      <Header/>
      <Home/>
      <About/>  
    </div>
  )
}