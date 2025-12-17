import React, { useEffect } from 'react'
import { useGetProductsQuery } from "../../services/productsApi"
import '../../css/main.scss';
import { Product } from '../../shared/types/mainProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, filterByName } from './productsSlice';
import { RootState } from '../../app/store';
import AsidePicker from '../asidePicker/AsidePicker';

const ProductsList = () => {
    const { data, error, isLoading } = useGetProductsQuery()
    const dispatch = useDispatch();
    // const [cartItems, setCartItems] = React.useState<Product[]>([]);


    // {}

    const cartItems = useSelector((state: RootState) => state.product.cartItems);
    console.log(cartItems, "cartItems")
    const selectedFilter = useSelector((state: RootState) => state.product.filter);
    const selectedFilterRange = useSelector((state: RootState) => state.product.filterRange);
    const selectedFilterByName = useSelector((state: RootState) => state.product.nameFilter);
    console.log(selectedFilterByName, "selectedFilterRange")
    // Filter products based on selected category
    const filteredProducts = React.useMemo(() => {
        if (!data) return [];
        let filterdProducts = data;

        if (selectedFilter !== '' && selectedFilter !== 'all') {
            filterdProducts = filterdProducts.filter((product: Product) =>
                product.category.toLowerCase() === selectedFilter.toLowerCase()
            );
        }
        if (selectedFilterRange.length > 0) {
            filterdProducts = filterdProducts.filter((product: Product) =>
                product.price >= selectedFilterRange[0] && product.price <= selectedFilterRange[1]
            );
        }
        // if (selectedFilterByName.length > 0) {
        //     let searchedProduct = selectedFilterByName.toLocaleLowerCase()
        //     filterdProducts = filterdProducts.filter((products: Product) => {
        //         let newProduct = products.title.toLocaleLowerCase()
        //         // return newProduct.includes(searchedProduct)
        //         // if (products.title) {
        //         // products.title === selectedFilterByName

        //         for (let i = 0; i <= newProduct.length - newProduct.length; i++) {
        //             const latest = newProduct.slice(i, i + searchedProduct.length)
        //             if (latest === searchedProduct) {
        //                 console.log(latest, "latest")
        //                 return latest
        //             }
        //             // let new = i === searchedProduct
        //             // n
        //             return false
        //         }

        //         // console.log(newProduct, "im the new product")

        //         // }
        //     });
        // }
        if (selectedFilterByName.length > 0) {
            const searched = selectedFilterByName.toLowerCase();

            filterdProducts = filterdProducts.filter((product: Product) => {
                const title = product.title;
                const lowerTitle = title.toLowerCase();
                for (let i = 0; i <= lowerTitle.length - searched.length; i++) {
                    const chunk = lowerTitle.slice(i, i + searched.length);
                    if (chunk === searched) {
                        return true;
                    }
                }

                return false;
            });
        }
        return filterdProducts;
    }, [data, selectedFilter, selectedFilterRange, selectedFilterByName]);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    }
    useEffect(() => {
        const handleSearch = (e: Event) => {
            const customEvent = e as CustomEvent
            dispatch(filterByName(customEvent.detail));
        };
        window.addEventListener("search", handleSearch);
        return () => {
            window.removeEventListener("search", handleSearch);
        };
    }, [dispatch]);


    if (error) return <div>Error: {(error as any).message}</div>
    return (
        <div className="products-layout">
            <AsidePicker
            // categoryMatch="all" 
            />
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
