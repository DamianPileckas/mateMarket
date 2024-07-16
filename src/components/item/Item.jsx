const Item = ({item}) => {
    
  return (
    
    <div className="col-md-3">
      <div className="card border-0 fixed-card">
        <img src={item.pictureUrl} className="card-img-top p-3 fixed-image" alt={item.title}/>
        <div className="card-body p-2">
          <p className="card-text p-3">{item.title}</p>
          <p className="card-text p-3">${item.price}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Item
