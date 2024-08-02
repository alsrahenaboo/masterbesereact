import React from "react";

function ProductCard({ url, name, Price, salePrice }) {
  return (
    <div className="product-card">
      <img src={url} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="regular-price">REG: ${Price} / SQ.F.</p>
      <p className="sale-price">SALE: ${salePrice} / SQ.F.</p>
      <button className="buy-button">Buy now</button>
    </div>
  );
}

export default ProductCard;
