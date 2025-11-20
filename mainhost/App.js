import React, { lazy, Suspense } from 'react';
import './src/css/main.scss';
import { ErrorBoundary } from 'react-error-boundary';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    createRoutesFromElements
} from 'react-router-dom';

//header and footer from remote
const Header = lazy(() => import('./src/components/Header'));
const Footer = lazy(() => import('./src/components/Footer'));
const Homepage = lazy(() => import('./src/components/HomePage'));
const SignInScreen = lazy(() => import('./src/features/SignInScreen'));
const ProductsWrapper = lazy(() => import('./src/wrapper/ProductsWrapper'))

//product list from remote
// const ProductsList = React.lazy(() => import('productsApp/ProductsList'));

//store provider from remote
const StoreProvider = lazy(() => import('productsApp/StoreProvider'));
const ErrorFallback = lazy(() => import('./src/components/ErrorBoundry'));
const CartExposes = lazy(() => import('productsApp/CartExposes'));
const CompareProducts = lazy(() => import('productsApp/CompareProducts'));


function Layout() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Outlet />
                <Footer />
            </Suspense>
        </>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/signin" element={<SignInScreen />} />
                <Route path="/products" element={<ProductsWrapper />} />
                <Route path="/cart" element={<CartExposes />} />
                <Route path="/product/comapre" element={<CompareProducts />} />
            </Route>
        </>
    )
);
const App = () => {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}
                onReset={() =>
                    window.location.reload()}>
                < RouterProvider router={router} />
            </ErrorBoundary >
        </>
    )
}

export default App; 
