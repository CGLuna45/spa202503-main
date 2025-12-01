import { HeroPanel } from "../components/HeroPanel";

export const About = ()=>{
    return (
        <>
            <HeroPanel photoId="120" />
            <section className="p-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-yellow-400">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(135deg, #3B5BDB 0%, #EF3B36 100%)'}}>
                        ℹ️ Acerca de esta Pokédex
                    </h1>
                    
                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h2 className="text-2xl font-bold text-red-600 mb-3">📱 ¿Qué es esta aplicación?</h2>
                            <p className="text-lg">
                                Esta es una Pokédex moderna y visual creada con tecnología web moderna. Te permite explorar 
                                todos los Pokémon conocidos, ver sus características, y aprender más sobre el fascinante mundo Pokémon.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-blue-600 mb-3">🛠️ Tecnología Utilizada</h2>
                            <ul className="list-disc list-inside space-y-2 text-lg">
                                <li><span className="font-bold">React</span> - Para la interfaz interactiva</li>
                                <li><span className="font-bold">Tailwind CSS</span> - Para estilos modernos y responsivos</li>
                                <li><span className="font-bold">Vite</span> - Para un desarrollo rápido</li>
                                <li><span className="font-bold">PokeAPI</span> - Para los datos de Pokémon</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-yellow-600 mb-3">🎮 Características</h2>
                            <ul className="list-disc list-inside space-y-2 text-lg">
                                <li>🔍 Explora miles de Pokémon</li>
                                <li>⚡ Interfaz rápida y responsiva</li>
                                <li>🎨 Diseño temático de Pokémon</li>
                                <li>📊 Información detallada de cada Pokémon</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-red-100 to-blue-100 rounded-xl p-6 border-2 border-yellow-400">
                            <p className="text-center text-lg font-bold text-gray-800">
                                🎉 ¡Gracias por usar nuestra Pokédex! ¡A capturar se dijo!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}