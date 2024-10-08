import { useContext } from "react";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {
    console.log(JSON.stringify(item) + "ItemDetail")
   
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
   
    return (
            <div className="container my-5">
                <div className="row p-3 bg-light bg-gradient rounded">
                    <div className="col d-flex justify-content-start offset-md-1">
                        <img className="w-75 p-3" src={item.pictureUrl} alt={item.title} />
                    </div>
                    <div className="col w-75 p-3">
                        <h1>{item.title}</h1>
                        <p><b>${item.price}</b></p>
                        <p>{item.description}</p>
                        <ItemCount stock={item.stock} agregar={onAdd}/>
                    </div>
                </div> 
            </div>
)
};

export default ItemDetail
