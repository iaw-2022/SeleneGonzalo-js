import {useAuth0} from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
function Header (){
    const {
        loginWithPopup,
        logout,
        isAuthenticated,
    } = useAuth0()

    return (
        
        <header className="text-gray-600 body-font shadow-xl dark:bg-yellow-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around items-center">
                <NavLink className="flex-shrink-0 mx-auto" to="/recipes">
                    <img className="block lg:block h-16 " src="https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png" alt="Logo"/>
                </NavLink>

                <nav className="mx-auto md:py-1 md:border-l md:border-gray-400 flex flex-wrap items-center text-base ">
                    <NavLink to="/recipes" className="text-2xl px-3 py-2 rounded-md text-sm leading-5 font-medium text-black font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white mx-auto">RECETAS</NavLink>
                </nav>

                <div className='mx-auto auth0'>
                    {console.log(isAuthenticated)}
                    <h3>{ isAuthenticated ? <button className = "bg-slate-100 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded shadow" onClick={logout}> Cerrar sesión </button> : <button className = "bg-slate-100 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded shadow" onClick={loginWithPopup}> Ingresar </button> } </h3>
                </div>
            </div>
         </header>
    )
}

export default Header