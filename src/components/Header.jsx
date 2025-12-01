import { Link } from "react-router";

export const Header = ( { title = "Pokédex 2025" } )=>{
    return (
        <header className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white flex justify-between items-center px-6 py-4 shadow-xl border-b-4 border-yellow-400">
            <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">⚪</div>
                <h1 className="text-2xl font-black tracking-wider drop-shadow-lg">{title}</h1>
            </div>
            <nav>
                <ul className="flex gap-1 items-center">
                    <li>
                        <Link 
                            to="/" 
                            className="inline-block px-6 py-3 text-sm font-bold hover:bg-red-500 hover:shadow-lg transition-all duration-200 rounded-full border-2 border-transparent hover:border-yellow-300"
                        >
                            ⚡ Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="inline-block px-6 py-3 text-sm font-bold hover:bg-red-500 hover:shadow-lg transition-all duration-200 rounded-full border-2 border-transparent hover:border-yellow-300"
                        >
                            ℹ️ Acerca de
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}