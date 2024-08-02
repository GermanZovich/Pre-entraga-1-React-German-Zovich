

export const CartProduct = (props) => {
    return (<div className="ContenedorTarjeta">
        <img src={props.img}></img>
        <p>{props.name}</p>
        <p>{props.detail}</p>
    </div>);
}