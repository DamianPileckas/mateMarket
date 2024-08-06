import { useEffect, useState } from "react";
import arrayProductos from "../../assets/json/data.json"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);  
  const {id} = useParams();
  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
          resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
      }, 2000)
    })

    promesa.then(response => {
      console.log(response)
      setItems(response)
    })
  }, [id])

  return (
      <>
        <div className="container">
          <div className="row p-2">
            <ItemList items={items} />
          </div> 
        </div>
      </>
    );
};

export default ItemListContainer
