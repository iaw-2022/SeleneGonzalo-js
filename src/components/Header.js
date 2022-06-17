import {useAuth0} from '@auth0/auth0-react'
function Header (){
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
    } = useAuth0()
    return (
        <header class="text-gray-600 body-font shadow-xl dark:bg-yellow-300">
            <div className='app'>
                <h1> Inicio </h1>
                <ul>
                    <li>
                        <button onClick={loginWithPopup}> Popup </button>
                    </li>
                    <li>
                        <button onClick={loginWithRedirect}> Redirect </button>
                    </li>
                    <li>
                        <button onClick={logout}> Log out </button>
                    </li>
                </ul>
                <h3> Usuario { isAuthenticated ? "autenticado" : "no autenticado" } </h3>
                { isAuthenticated && (
                    <pre style = {{textAlign: 'start'}}>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                )}
            </div>
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around items-center">
                <a class="flex-shrink-0 mx-auto" href="/recipes">
                    <img class="block lg:block h-16 " src="https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png" alt="Logo"/>
                </a>

                <nav class=" md:py-1 md:border-l md:border-gray-400 flex flex-wrap items-center text-base ">
                    <a href="/recipes" className="text-2xl px-3 py-2 rounded-md text-sm leading-5 font-medium text-black font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white mx-auto">RECETAS</a>
                </nav>

                <a href="/recipe/create" type="button" class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 mx-auto" data-bs-toggle="tooltip" title="Agregar receta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </a>
            </div>
         </header>
    )
}

export default Header