export const Card = (
    {
        id,
        name,
        defaultImgUri
    }
)=>{
    return (
        <section className="pokemon-card">
            <div className="relative h-40 bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center">
                <span className="absolute top-2 right-3 text-xs font-bold text-red-600">#{id}</span>
                <img src={defaultImgUri} alt={name} className="w-32 h-32 object-contain filter drop-shadow-lg" />
            </div>
            <h2>{name}</h2>
            <div className="px-3 pb-3 flex justify-between text-xs text-gray-600">
                <span>⚡ Tipo</span>
                <span>🎯 Poder</span>
            </div>
        </section>
    );
}