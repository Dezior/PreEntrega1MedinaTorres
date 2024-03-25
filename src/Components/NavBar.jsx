


function Header() {
    return (
        <header className="flex justify-between p-4 shadow-md bg-slate-400">
            <h1 id="titulo" className="encabezado"> DZ Games </h1>
            <nav className="hidden md:flex md:gap-4">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <img src="./icono-menu.png" alt="" />
                <Menu width={20} height={20}/>

            </nav>

        </header>
    )
}

export default Header
