import{
    ADD_PRODUCT,
    ADD_PRODUCT_OK,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_OK,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_TO_DELETE,
    GET_PRODUCT_TO_DELETE_OK,
    GET_PRODUCT_TO_DELETE_ERROR,
    GET_PRODUCT_TO_MODIFY,
    GET_PRODUCT_TO_MODIFY_OK,
    GET_PRODUCT_TO_MODIFY_ERROR
} from '../types/';
const intialState = {
    products : [],
    error: false,
    loading: false,
    selectedProductId : null
};
export default function( state = intialState, action ){
    switch( action.type ){
        case GET_PRODUCTS :
        case ADD_PRODUCT : 
            return{
                ...state,
                loading : action.payload
            };
        case ADD_PRODUCT_OK : 
            return {
                ...state,
                loading : false,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_ERROR :
        case GET_PRODUCTS_ERROR:           
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        case GET_PRODUCT_TO_DELETE_ERROR: 
        case GET_PRODUCT_TO_MODIFY_ERROR :
            return{
                ...state,
                loading : false,
                error : action.payload,
                selectedProductId : null
            }
        case GET_PRODUCTS_OK : 
            return{
                ...state,
                loading : false,
                error : false,
                products : action.payload
            }
        case GET_PRODUCT_TO_DELETE :
            return{
                ...state,
                loading : true,
                error: false,
                selectedProductId: action.payload
            }
        case GET_PRODUCT_TO_DELETE_OK :
            return{
                ...state,
                products : state.products.filter(p=>( p.id !== state.selectedProductId)),
                loading: false,
                error: false,
                selectedProductId: null
            }
        case GET_PRODUCT_TO_MODIFY: 
            return{
                ...state,
                loading: true,
                error: false,
                selectedProductId: action.payload
            }
        default: return state;
        case GET_PRODUCT_TO_MODIFY_OK:
            return{
                ...state,
                loading: false,
                error: false,
                selectedProductId: null,
                products : state.products.map( product=>
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
    }
}