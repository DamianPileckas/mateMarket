const ItemDetail = ({item}) => {
    console.log(item)
    return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={item.pictureUrl} alt={item.title} />
                    </div>
                    <div className="col">
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                </div> 
            </div>
)
};

export default ItemDetail
