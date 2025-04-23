import React from "react";
import "./menu.css";

const ProductCard = ({image, name, price, description}) => {
    return (
        <div className="product-card" data-aos="fade-up">
            <img className="product-image" src={image} alt={name}/>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price} сум</p>
            <p className="product-description">{description}</p>
        </div>
    );
};

export default ProductCard;