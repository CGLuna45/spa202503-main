import { HeroPanel } from "../components/HeroPanel"
import { PokeList } from "../components/Pokedex/PokeList"

export const Home = ()=>{
    return (
        <>
            <HeroPanel photoId="340" />
            <section className="p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h2 className="text-4xl font-black text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #EF3B36 0%, #FFCB05 100%)'}}>
                            🔍 Explora todos los Pokémon
                        </h2>
                        <p className="text-gray-600 mt-2">Haz clic en cualquier Pokémon para ver más detalles</p>
                    </div>
                    <PokeList />
                </div>
            </section>
        </>
    )
}