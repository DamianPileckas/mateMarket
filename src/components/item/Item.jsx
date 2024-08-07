import { Link } from "react-router-dom";

const Item = ({item}) => {
    
  return (
    
    <div className="col-md-4 mb-3">
      <div className="card border-0 h-100">
        <Link to={"/item/"+ item.id}>
          <img src={item.pictureUrl} className="card-img-top h-100 w-100" alt={item.title}/>
        </Link>
        <div className="card-body">
          <p className="card-text"><b>{item.title}</b></p>
          <p className="card-text"><b>${item.price}</b></p>
        </div>
      </div>
    </div>
    
  );
};

export default Item
