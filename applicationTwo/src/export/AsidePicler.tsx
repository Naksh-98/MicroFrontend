import React from 'react'
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
const AsidePicker = React.lazy(() => import('../features/asidePicker/AsidePicker'));

const Exposes = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    <AsidePicker />
                </Provider>
            </Suspense>

        </>
    )
}

export default Exposes;