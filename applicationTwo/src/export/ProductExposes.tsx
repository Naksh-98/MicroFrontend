import React from 'react'
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
const ProductsList = React.lazy(() => import('../features/product/ProductsList'));

const Exposes = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    <ProductsList />
                </Provider>
            </Suspense>

        </>
    )
}

export default Exposes