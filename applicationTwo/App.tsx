import React, { lazy, ReactNode } from 'react';
import { Suspense } from 'react';
import './src/css/main.scss';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
const ProductsList = React.lazy(() => import('./src/features/product/ProductsList'));


function App() {
    function ErrorFallback({ error, resetErrorBoundary }: FallbackProps): ReactNode {
        return (
            <div role="alert" style={{ color: 'red', padding: '1rem', background: '#fee' }}>
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        );
    }
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}
                onReset={() => {
                    window.location.reload()
                }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductsList />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}
export default App;
