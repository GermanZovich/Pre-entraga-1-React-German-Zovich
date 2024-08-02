import { useEffect, useState } from "react";
import data from "/data/products.json";
import { CartProduct } from "./CartProduct";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();


    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {resolve(data)}, 3000);
        }).then((response) => {
            if(!id){
                setItems(response);
            } else{
                const filtered = response.filter(i => i.category === id);
                setItems(filtered);
            }
        })
        .finally(() => {setLoading(false)});
    }, [id]);


    if(loading)return <>Cargando...</>

    if(items.length === 0) return <>No hay productos disponibles</>
    return <>
        <h1>Productos</h1>
        {
            items.map((i) => {
                return <CartProduct key={i.id} name={i.name} detail={i.detail} img={i.img}
                link={`/item/${i.id}`} linkName={"Mas info"}/>;
            })
        }
        </>
};