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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        ()=>{
            const loadData = async() => {
                try {
                    setLoading(true);
                    setError(null);
                    const resData = await getPokemonList(page, 50);
                    if (resData && resData.results) {
                        setData(resData);
                    } else {
                        setError("No se pudieron cargar los Pokémon");
                    }
                } catch (err) {
                    console.error("Error cargando Pokémon:", err);
                    setError("Error al conectar con la API de Pokémon");
                } finally {
                    setLoading(false);
                }
            }
            loadData();
        }
    , [page]);

    if (loading) {
        return <div className="text-center py-12">
            <div className="text-4xl mb-4 animate-bounce">⚪ 🔴</div>
            <p className="text-gray-600 font-bold">Cargando Pokémon...</p>
        </div>
    }

    if (error || !data) {
        return <div className="text-center py-12 bg-red-50 rounded-lg border-2 border-red-300 p-6">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-red-700 font-bold text-lg">{error || 'Error desconocido'}</p>
            <p className="text-red-600 text-sm mt-2">Intenta recargar la página</p>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all"
            >
                🔄 Recargar
            </button>
        </div>
    }

    return (
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                {
                    data.results && data.results.length > 0 ? (
                        data.results.map(pokemon => {
                            const id = getPokemonId(pokemon.url);
                            const imgUrl = getPokemonImgUrl(id);
                            return (
                                <Card
                                    key={id}
                                    id={id}
                                    name={pokemon.name}
                                    defaultImgUri={imgUrl}
                                />
                            )
                        })
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            No hay Pokémon para mostrar
                        </div>
                    )
                }
            </section>
            <div className="flex items-center justify-center gap-4 flex-wrap py-8 border-t-4 border-yellow-400 pt-8">
                {page !== 1 && (
                    <Button onClick={()=>{setPage(page-1)}}>⬅️ Anterior</Button>
                )}
                <span className="font-bold text-gray-700 px-4 py-2 bg-white rounded-full border-2 border-gray-300">
                    Página <span className="text-red-600">{page}</span> de <span className="text-blue-600">{Math.ceil((data?.count || 0) / 50)}</span>
                </span>
                {page !== Math.ceil((data?.count || 0) / 50) && (
                    <Button onClick={()=>{setPage(page+1)}}>Siguiente ➡️</Button>
                )}
            </div>
        </>
    )
}