import React from 'react'
import "./product.css"

const Product = ({product}) => {
    return (
        <div className="product">
            <div className="p-browser">
                <div className="p-circle red"></div>
                <div className="p-circle yellow"></div>
                <div className="p-circle green"></div>
            </div>
            <a href={product.link} target="_blank" rel="noreferrer">
                <img src={product.img} alt="" />
            </a>
        </div>
    )
}

export default Product
