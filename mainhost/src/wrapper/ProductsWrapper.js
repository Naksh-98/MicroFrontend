import React, { lazy } from 'react';
import NavigationContext from 'productsApp/NavigationRout';
import { useNavigate } from 'react-router-dom';
const ProductsList = lazy(() => import('productsApp/Exposes'));

export default function ProductsWrapper() {
    const navigate = useNavigate();
    const navigateWithIntent = (command) => {
        console.log(command, 'im the command in the host')
        switch ("compare") {
            case navigate("/product/comapre"):
                break;
        }
    }
    return (
        <>
            <NavigationContext.Provider value={navigateWithIntent}>
                <ProductsList />
            </NavigationContext.Provider>

        </>
    )
}

