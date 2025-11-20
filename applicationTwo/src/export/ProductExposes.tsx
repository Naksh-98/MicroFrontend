import React from 'react'
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
// import { NavigationContext } from "../../../mainhost/src/routing/navigationContext"
import { useNavigate } from "react-router-dom";
import CompareProducts from '../features/product/CompareProducts';
import { Route, Routes } from 'react-router-dom';
const ProductsList = React.lazy(() => import('../features/product/ProductsList'));

const Exposes = () => {
    // const navigate = useNavigate()
    // const handleNavigation = (compare: string) => {
    //     switch (compare) {
    //         case "compare":
    //             navigate("/compare");

    //             break;
    //     }
    // }
    // const ProductsMFE = () => {
    //     return (
    //         <Routes>
    //             <Route path='/compare' element={< CompareProducts />} />
    //         </Routes>
    //     )
    // } 
    // const userNavigate = [
    //     { "/product": "./compare": }
    // ]
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    {/* <NavigationContext.Provider value={handleNavigation}> */}
                        <ProductsList />
                    {/* </NavigationContext.Provider > */}
                </Provider>
            </Suspense >

        </>
    )
}

export default Exposes