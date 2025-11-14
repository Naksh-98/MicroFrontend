
const InitialState = {
    products: [],
    isLoading: false,
    error: null,
};
interface Action {
    type: string;
    payload?: any;
}

const productSlice = (state = InitialState, action: Action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default productSlice;