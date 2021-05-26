import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    return (
        <>
            <div className="ui link cards four column doubling stackable">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} className="card column wide" key={product.id}>
                        <div className="image">
                            <img className="ui image" src={product.image} alt={product.title} />
                        </div>
                        <div className="content">
                            <div className="header">
                                {product.title}
                            </div>
                            <div className="meta">
                                <span classname="date">$ {product.price}</span>
                            </div>
                            <div classname="extra content">
                                <span>{product.category}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ProductComponent
