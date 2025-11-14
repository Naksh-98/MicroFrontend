import React from 'react'
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
const CartList = React.lazy(() => import('../features/cart/CartList'));

const Exposes = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    <CartList />
                </Provider>
            </Suspense>

        </>
    )
}

export default Exposes