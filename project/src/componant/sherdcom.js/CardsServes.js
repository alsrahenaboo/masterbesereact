import React from "react";

function ProductCard({ url, name, description, salePrice }) {
  return (
    <div className="product-card">
      <img src={url} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <h3 className="product-name">{description}</h3>
      {/* <p className="regular-price">REG: ${Price} / SQ.F.</p> */}
      <p className="sale-price">Price: ${salePrice} / SQ.F.</p>
      <button className="buy-button">Buy now</button>
    </div>
  );
}

export default ProductCard;
