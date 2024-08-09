import ItemDetail from "../itemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});  
  const {id} = useParams();
  
  /*useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
          resolve(arrayProductos.find(item => item.id == id))
      }, 2000)
    })

    promesa.then(response => {
      setItem(response)
      
    })
  }, [id])
  */
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then(snapShot => {
        if (snapShot.exists()) {
            setItem({id:snapShot.id, ...snapShot.data()});
        } else {
            console.error("Error! No existe el documento!");
        }
    })
}, [id])

  return (
      <ItemDetail item={item} />
    );
};

export default ItemDetailContainer
