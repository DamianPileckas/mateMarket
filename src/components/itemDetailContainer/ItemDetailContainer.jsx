import ItemDetail from "../itemDetail/ItemDetail"
import arrayProductos from "../../assets/json/data.json"
import { useEffect, useState } from "react";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});  
  
  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
          resolve(arrayProductos.find(item => item.id === '1'))
      }, 2000)
    })

    promesa.then(response => {
      setItem(response)
    })
  }, [])

  return (
      <ItemDetail item={item} />
    );
};

export default ItemDetailContainer
