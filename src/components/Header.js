import {useAuth0} from '@auth0/auth0-react'
function Header (){
    const {
        loginWithPopup,
        logout,
        user,
        isAuthenticated,
    } = useAuth0()

    return (
        <header className="text-gray-600 body-font shadow-xl dark:bg-yellow-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around items-center">
                <a className="flex-shrink-0 mx-auto" href="/recipes">
                    <img className="block lg:block h-16 " src="https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png" alt="Logo"/>
                </a>

                <nav className=" md:py-1 md:border-l md:border-gray-400 flex flex-wrap items-center text-base ">
                    <a href="/recipes" className="text-2xl px-3 py-2 rounded-md text-sm leading-5 font-medium text-black font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white mx-auto">RECETAS</a>
                </nav>

                { isAuthenticated ? (
                    <a href="/recipe/create" type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 mx-auto" data-bs-toggle="tooltip" title="Agregar receta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </a>
                ) : <a className='mx-auto'> Inicia sesión para cargar una receta</a>}

                <div className='auth0'>
                    {console.log(isAuthenticated)}
                    <h3>{ isAuthenticated ? <button className = "bg-slate-100 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded shadow" onClick={logout}> Cerrar sesión </button> : <button className = "bg-slate-100 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded shadow" onClick={loginWithPopup}> Ingresar </button> } </h3>
                </div>
            </div>
         </header>
    )
}

export default Header