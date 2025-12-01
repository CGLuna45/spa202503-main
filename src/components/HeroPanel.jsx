export const HeroPanel = (
    {
        photoId = "120"
    }
) => {
    return (
        <div className="hero-panel w-full h-[60vh] overflow-hidden relative max-w-screen">
            <picture className="w-full h-full">
                <source srcset={`https://picsum.photos/id/${photoId}/1300/720`} media="(min-width:1025px)" />
                <source srcset={`https://picsum.photos/id/${photoId}/1024/640`} media="(min-width:720px)" />
                <img className="w-full h-full object-cover opacity-30" src={`https://picsum.photos/id/${photoId}/480/480`} alt="Hero Panel Images" />
            </picture>
            
            {/* Decorative pokéballs */}
            <div className="absolute top-10 right-10 text-6xl opacity-20 poke-bounce">⚪</div>
            <div className="absolute bottom-10 left-10 text-7xl opacity-15" style={{animationDelay: '0.5s'}}>🔴</div>
            
            <div className="hero-content">
                <h2>¡Bienvenido Entrenador!</h2>
                <p>Descubre y colecciona todos los Pokémon. Explora el mundo Pokémon y conviértete en un Maestro Pokémon.</p>
                <button className="btn principal w-full">
                    ⚡ Comenzar Aventura
                </button>
            </div>
        </div>
    );
}