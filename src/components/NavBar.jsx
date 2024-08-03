import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget"

export const NavBar = () => (
<div className="navBarContainer">
    <ul>
        <li><a as={NavLink} href="/">Home</a></li>
        <li><a as={NavLink} href="/category/Comida">Comidas</a></li>
        <li><a as={NavLink} href="/category/infuciones">Infuciones</a></li>
    </ul>
    <CartWidget/>
</div>
);