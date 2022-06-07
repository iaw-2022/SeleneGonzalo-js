function Header (){
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">RECETACCS</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a href="/recipes" className="text-gray-800 transition-colors duration-200 transform dark:text-black-200 border-b-2 border-yellow-500 mx-1.5 sm:mx-6">Recetas</a>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Agregar receta
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>

        // <nav className="bg-white shadow dark:bg-gray-800">
        //     <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        //         <a href="/recipes" className="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Recetas</a>
        //     </div>
        // https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png
        // </nav>
    )
}

export default Header