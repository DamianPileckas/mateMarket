import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({item}) => {
    console.log(item)
    return (
            <div className="container ">
                <div className="row p-3 bg-light bg-gradient">
                    <div className="col d-flex justify-content-start offset-md-1">
                        <img className="w-75 p-3" src={item.pictureUrl} alt={item.title} />
                    </div>
                    <div className="col w-75 p-3">
                        <h1>{item.title}</h1>
                        <p><b>${item.price}</b></p>
                        <p>{item.description}</p>
                        <ItemCount stock={item.stock}/>
                    </div>
                </div> 
            </div>
)
};

export default ItemDetail
