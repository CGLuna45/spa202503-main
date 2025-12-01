import { Card } from "./Card";
import { Button } from "../Button";
import { usePokemonService } from "../../hooks/usePokemonService";
import { useEffect, useState } from "react";

export const PokeList =()=>{
    const {
        getPokemonList,
        getPokemonId,
        getPokemonImgUrl
    } = usePokemonService();
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    useEffect(
        ()=>{
            const loadData= async()=>{
                const resData = await getPokemonList(page, 50);
                setData(resData);
            }
            loadData();
        }
    , [page, setData]);

    if (!data) {
        return <div className="text-center py-12">
            <div className="text-4xl mb-4 animate-bounce">⚪ 🔴</div>
            <p className="text-gray-600 font-bold">Cargando Pokémon...</p>
        </div>
    }
    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {
                    data.results.map(pokemon => {
                        const id = getPokemonId(pokemon.url);
                        const imgUrl = getPokemonImgUrl(id);
                        return (
                            (<Card
                                key={id}
                                id={id}
                                name={pokemon.name}
                                defaultImgUri={imgUrl}
                            />)
                        )
                    })
                }
            </section>
            <div className="flex items-center justify-center gap-4 flex-wrap py-8 border-t-4 border-yellow-400 pt-8">
                {page !== 1 && (
                    <Button onClick={()=>{setPage(page-1)}}>⬅️ Anterior</Button>
                )}
                <span className="font-bold text-gray-700 px-4 py-2 bg-white rounded-full border-2 border-gray-300">
                    Página <span className="text-red-600">{page}</span> de <span className="text-blue-600">{Math.ceil(data.count / 50)}</span>
                </span>
                {page !== Math.ceil(data.count / 50) && (
                    <Button onClick={()=>{setPage(page+1)}}>Siguiente ➡️</Button>
                )}
            </div>
        </>
    )
}