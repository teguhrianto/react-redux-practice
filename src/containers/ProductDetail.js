import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

function ProductDetail() {
    const product = useSelector((state) => state.product)
    const {image, title, price, category, description} = product
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(productId)

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log('Error', err)
            })

        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if(productId && productId !== '') fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>Loading ....</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img src={image} alt={title} className="ui fluid image" />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2 className="ui teal tag label">
                                    ${price}
                                </h2>
                                <h3 className="ui brown">{category}</h3>
                                <p>
                                    {description}
                                </p>
                                <div className="ui vertical animated button">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
