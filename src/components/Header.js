function Header (){
    return (
        <header class="text-gray-600 body-font shadow-md dark:bg-yellow-300">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around items-center">
                <a class="flex-shrink-0" href="/recipes">
                    <img class="block lg:hidden h-16 w-16 " src="https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png" alt="Logo"/>
                    <img class="hidden lg:block h-16 w-auto" src="https://logos-download.com/wp-content/uploads/2021/01/Sin_T.A.C.C._Logo.png" alt="Logo"/>
                </a>

                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base ">
                    <a href="/recipes" className="text-2xl ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-black font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-black">RECETACCS</a>
                </nav>

                <a href = "/recipe/create" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Agregar receta
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                
            </div>
         </header>
    )
}

export default Header