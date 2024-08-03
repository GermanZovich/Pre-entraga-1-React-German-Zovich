import { Link } from "react-router-dom";
export const CartProduct = (props) => {
    return (<div className="contenedorTarjeta">
        <img src={props.img}></img>
        <p>{props.name}</p>
        <p>{props.detail}</p>
        <Link to={props.link}><button>{props.linkName}</button></Link>
    </div>);
}