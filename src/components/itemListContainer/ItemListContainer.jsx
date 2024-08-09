import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);  
  const {id} = useParams();

 /* useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    arrayProductos.forEach(item => {
        addDoc(itemsCollection, item)
    })

    console.log("Proceso de importación finalizado!");
}, [])
*/

// Acceder a una Colección realizando Consultas
useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
  getDocs(q).then(snapShot => {
      if (snapShot.size > 0) {
          setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
      } else {
          console.error("Error! No existe la Colección 'items'!");
      }
  })
}, [id])
  return (
      <>
        <div className="container my-5 rounded">
          <div className="row p-2">
            <ItemList items={items} />
          </div> 
        </div>
      </>
    );
};

export default ItemListContainer
