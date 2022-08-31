import React from "react";
import logo from '../images/logo.png'
import CardWitget from "./CardWitget";

const NavBar = () => {
    return(
            <header className="text-base  bg-purple-500 flex justify-between	p-1.5" >
                <div>
                    <a href=""><img className="h-10" src={logo} alt="" /></a>
                </div>
                <nav>
                    <ul className="flex gap-5 p-1.5">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/">Mascotas</a>
                        </li>
                        <li>
                            <a href="/">Alimentos</a>
                        </li>
                        <li>
                            <a href="/">Servicio</a>
                        </li>
                        <li>
                            <a href="/">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <CardWitget/>

            </header>
    )
}

export default NavBar;