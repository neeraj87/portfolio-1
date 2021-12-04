import React from 'react'
import "./productList.css"
import Product from "../product-item/Product"
import { projects } from "../../../data"

const ProductList = () => {
    return (
        <div className="product-list">
            <div className="pl-texts">
                <h1 className="pl-title">Products</h1>
                <p className="pl-desc">
                    Some text
                </p>
            </div>
            <div className="pl">
                {
                    projects.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
