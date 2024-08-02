import { useEffect, useState } from "react";
import data from "/data/products.json";
import { useParams, Link } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();


    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {resolve(data)}, 3000);
        }).then((response) => {
                const finded = response.find(i => i.id === Number(id));
                setItem(finded);
        })
        .finally(() => {setLoading(false)});
    }, [id]);


    if(loading)return <>Cargando...</>

    if(!item) return <>No hay productos disponibles</>

    return( <>
        <h1>Producto</h1>
        <img src={item.img}></img>
        <p>{item.category}</p>
        <p>{item.name}</p>
        <p>{item.detail}</p>
        <Link to="/"><button>Home</button></Link>
        </>)
};