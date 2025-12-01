import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router";

export const Layout = ()=>{
   return ( <section className="flex flex-col min-h-0 w-full bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100">
        <Header title="Pokédex 2025" />
        <main className="flex-1 overflow-y-auto">
            <Outlet />
        </main>
        <Footer />
    </section>
   );
}