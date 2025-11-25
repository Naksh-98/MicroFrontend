import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/product/productsSlice';
import { RootState } from '../../app/store';
import '../../css/main.scss';
import DeleatButton from "../../components/DeleatButton"
import { useContext } from 'react';
import { Product } from '../../shared/types/mainProduct';
import NavigationContext from "../../routing/navigationContext"

const DeleatBar = () => {
    const dispatch = useDispatch();
    // const context = useContext<Product>

    const cartItems = useSelector((state: RootState) => state.product.cartItems);

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear all items from your cart?')) {
            dispatch(clearCart());
        }
    };
    const navigateWithIntent = useContext(NavigationContext)



    return (
        <div className="deletebar">
            <div className='imagediv'>
                {cartItems.map((Img, idx) => (
                    <img src={Img.image} alt="" />
                ))}
            </div>
            <div>
                <DeleatButton
                    onClick={handleClearCart}
                    disabled={cartItems.length === 0}
                > <span className="delete-icon">🗑️</span>
                    <span className="clear-cart-label">
                        <span className="clear-cart-count">{cartItems?.length}</span>
                        Clear Cart
                    </span>

                </DeleatButton >
                <DeleatButton
                    onClick={() => navigateWithIntent("compare")}
                    className=''
                >
                    <span>
                        Compare Products
                    </span>
                </DeleatButton>
            </div>

        </div>
    );
};

export default DeleatBar;