import React from 'react';

const CardItem = ({product,setStoreProduct}) => {
    const {title,photoURL,brand,reselPrice,category_id} = product;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>{title}</p>
          <p>Price: ${reselPrice}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>setStoreProduct(product)} className="btn btn-primary bg-blue-500 text-white">Add Product </button>
          </div>
        </div>
      </div>
    );
};

export default CardItem;