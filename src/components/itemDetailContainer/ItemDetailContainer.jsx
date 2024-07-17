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
      console.log(JSON.stringify(response) + "ItemDETAILcontainer") 
      setItem(response)
      
    })
    console.log(JSON.stringify(item) + "ItemDETAILcontainer 2")
  }, [id])

  return (
      <ItemDetail item={item} />
    );
};

export default ItemDetailContainer
