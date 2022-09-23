import React from "react";
import logo from '../images/logo.png'
import CardWitget from "./CardWitget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
            <header className="text-base  bg-purple-500 flex justify-between	p-1.5" >
                <div>
                    <NavLink to={"/"}><img className="h-10" src={logo} alt="" /></NavLink>
                </div>
                <nav>
                    <ul className="flex gap-5 p-1.5">
                        <li>
                            <NavLink to={"/"}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categoria/Perros'}>Perros</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categoria/Gatos'}>Gatos</NavLink>
                        </li>
                        {/*<li>
                            <NavLink to={"/Productos"}>Servicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Productos"}>Contacto</NavLink>
                        </li> */}
                    </ul>
                </nav>
                <Link to={"/cart"}>
                <CardWitget/>
                </Link>

            </header>
    )
}

export default NavBar;