import { useEffect, useState } from "react";
import data from "/data/products.json";
import { CartProduct } from "./CartProduct";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {resolve(data)}, 3000);
        }).then((response) => setItems(response))
        .finally(() => {setLoading(false)});
    }, []);


    if(loading)return <>Cargando...</>

    if(items.length === 0) return <>No hay productos disponibles</>
    return <>
        <h1>Productos</h1>
        {
            items.map((i) => {
                <CartProduct name={i.name} detail={i.detail} img={i.img}/>
            })
        }
        </>
};