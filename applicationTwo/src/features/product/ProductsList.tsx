import React, { useEffect } from 'react'
import { useGetProductsQuery } from "../../services/productsApi"
import '../../css/main.scss';
import { Product } from '../../shared/types/mainProduct';


const ProductsList = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    const [cartItems, setCartItems] = React.useState<Product[]>([]);

    const handleAddToCart = (product: Product) => {
        setCartItems(previous => {
            const updatedItems = [...previous, product];
            window.dispatchEvent(new CustomEvent("addToCart", { detail: cartItems }));
            return updatedItems;
        });
    }
    console.log(cartItems,"im the cart");

    return (
        <div>
            <div className="products-container">
                {isLoading ?
                    <div>
                        ...Loading
                    </div>
                    :
                    data?.map((product: Product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <p style={{ overflow: "auto" }}>{product.description}</p>
                            <div className="product-card-footer">
                                <button className="add-to-cart-button"
                                    onClick={() => handleAddToCart(product)}
                                >Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ProductsList;
