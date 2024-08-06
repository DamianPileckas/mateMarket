import ItemDetail from "../itemDetail/ItemDetail"
import arrayProductos from "../../assets/json/data.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});  
  const {id} = useParams();
  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
          resolve(arrayProductos.find(item => item.id == id))
      }, 2000)
    })

    promesa.then(response => {
      setItem(response)
      
    })
  }, [id])

  return (
      <ItemDetail item={item} />
    );
};

export default ItemDetailContainer
