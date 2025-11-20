import React, { useEffect } from 'react'
import { useGetProductsQuery } from "../../services/productsApi"
import '../../css/main.scss';
import { Product } from '../../shared/types/mainProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './productsSlice';
import { RootState } from '../../app/store';
import AsidePicker from '../asidePicker/AsidePicker';

const ProductsList = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    const dispatch = useDispatch();
    // const [cartItems, setCartItems] = React.useState<Product[]>([]);

  
    // {}

    const cartItems = useSelector((state: RootState) => state.product.cartItems);
    const selectedFilter = useSelector((state: RootState) => state.product.filter);

    // Filter products based on selected category
    const filteredProducts = React.useMemo(() => {
        if (!data) return [];
        if (selectedFilter === '' || selectedFilter === 'all') {
            return data;
        }
        return data.filter((product: Product) =>
            product.category.toLowerCase() === selectedFilter.toLowerCase()
        );
    }, [data, selectedFilter]);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    }

    // Sync Redux cartItems with window event for microfrontend communication
    useEffect(() => {
        window.dispatchEvent(new CustomEvent("addToCart", { detail: cartItems }));
    }, [cartItems, dispatch]);

    if (error) return <div>Error: {(error as any).message}</div>
    return (
        <div className="products-layout">
            <AsidePicker />
            <div className="products-container">
                {isLoading ?
                    <div>
                        ...Loading
                    </div>
                    :
                    filteredProducts.length === 0 ? (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                        </div>
                    ) : (
                        filteredProducts.map((product: Product) => (
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
                    )
                }
            </div>

        </div>
    )
}
export default ProductsList;
