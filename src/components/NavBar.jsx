import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget"

export const NavBar = () => (
<>
    <ul>
        <li><a as={NavLink} href="/">Home</a></li>
        <li><a as={NavLink} href="/category/comidas">Comidas</a></li>
        <li><a as={NavLink} href="/category/infuciones">Infuciones</a></li>
    </ul>
    <CartWidget/>
</>
);