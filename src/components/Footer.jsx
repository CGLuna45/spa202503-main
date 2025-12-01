export const Footer = ()=>{
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 flex justify-center items-center shadow-lg border-t-4 border-yellow-400">
            <div className="text-center">
                <p className="font-bold text-sm mb-1">
                    🔴 Pokédex © {new Date().getFullYear()} 🔵
                </p>
                <span className="text-xs text-blue-100">Todos los Derechos Reservados</span>
            </div>
        </footer>
    );
}