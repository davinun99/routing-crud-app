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
    GET_PRODUCT_TO_MODIFY_START,
    GET_PRODUCT_TO_MODIFY_OK,
    GET_PRODUCT_TO_MODIFY_ERROR
} from '../types/';
import axiosClient from '../conf/Axios';
import Swal from 'sweetalert2';

//create new product
export function createNewProductAction( product ){
    return async ( dispatch ) => {
        dispatch( addProduct() );
        try {
            //insert product on API
            await axiosClient.post( '/products', product );
            //insert on state
            dispatch( addProductOk( product ) )
            Swal.fire(
                'Success',
                'Product added succesfully',
                'success'
            );
        } catch (error) {
            console.log( error );
            //change state for error
            dispatch( addProductError( true ) );
            Swal.fire({
                icon : 'error',
                title: 'There was an error',
                text : 'There was an error, please try again...'
            });
        }
    }
}
const addProduct = () => ({
    type : ADD_PRODUCT,
    payload : true
});
//product to db
const addProductOk = (product)=>({
    type : ADD_PRODUCT_OK,
    payload : product
})
//Error adding product
const addProductError = ( status )=>({
    type : ADD_PRODUCT_ERROR,
    payload : status
})
export function getProductsAction(){
    return async( dispatch ) =>{
        dispatch( getProducts() );
        try {
            const response = await axiosClient.get('products')
            dispatch( getProductsOk(response.data));
        } catch (error) {
            dispatch( getProductsError( false ) );
            console.log(error)
        }
    }
}
const getProducts = () => ({
    type : GET_PRODUCTS,
    payload : true
})
const getProductsOk = ( products )=>({
    type : GET_PRODUCTS_OK,
    payload : products
})
const getProductsError = ( status )=>({
    type : GET_PRODUCTS_ERROR,
    payload : true
})
export function getProductToDeleteAction( id ){
    return async dispatch=>{
        dispatch( getProductToDelete( id ) );
        try {
            await axiosClient.delete( `/products/${id}` );
            dispatch( getProductToDeleteOK() );
            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            )
        } catch (error) {
            console.log( error );
            dispatch( getProductToDeleteError() );
        }
        

    }
};
const getProductToDelete = ( id ) => ({
    type : GET_PRODUCT_TO_DELETE,
    payload : id
})
const getProductToDeleteOK = ()=>({
    type : GET_PRODUCT_TO_DELETE_OK
})
const getProductToDeleteError = () =>({
    type: GET_PRODUCT_TO_DELETE_ERROR,
    payload : true
});

export function getProductToEditAction( product ){
    return dispatch=>{
        dispatch( getProductToEdit(product) );
    }
}
const getProductToEdit = (product)=>({
    type : GET_PRODUCT_TO_MODIFY,
    payload : product
})

export function editProductAction( product ){
    return async dispatch=>{
            dispatch( editProduct( ) );
        try {
            const response = await axiosClient.put( `/products/${product.id}`, product );
            console.log( response );
            dispatch( editProductOk( product ) );
        } catch (error) {
            dispatch( editProductError() );
            console.log( error );
        }    
    };
}
const editProduct = ( )=>({
    type : GET_PRODUCT_TO_MODIFY_START
});
const editProductOk = ( product ) =>({
    type : GET_PRODUCT_TO_MODIFY_OK,
    payload : product 
})
const editProductError = () => ({
    type : GET_PRODUCT_TO_MODIFY_ERROR,
    payload: true
})