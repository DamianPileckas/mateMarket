import { useEffect, useState } from "react";
import arrayProductos from "../../assets/json/data.json"
import ItemList from "../itemList/ItemList"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);  
  
  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
          resolve(arrayProductos)
      }, 2000)
    })

    promesa.then(response => {
      console.log(response)
      setItems(response)
    })
  }, [])

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
