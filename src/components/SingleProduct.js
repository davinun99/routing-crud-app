import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductToDeleteAction, getProductToEditAction } from "../actions/ProductActions";
import Swal from "sweetalert2";
const SingleProduct = ({product})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const confirmProductDelete = id=>{
        //request user confirm
        Swal.fire({
            title: 'Are you sure?',
            text: 'This is irreversible',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancel',
            confirmButtonText:'Yes, delete it!'
        }).then((result)=>{
            if ( result.value ) {
                dispatch( getProductToDeleteAction(id) );
            }
        });        
    }
    const goToEdition = product => {
        dispatch( getProductToEditAction( product ) );
        history.push( `/products/edit/${product.id}` );
    }
    return(
        <tr>
            <td>{product.name}</td>
            <td><span className="font-weight-bold">$ {product.price}</span></td>
            <td>
                <button 
                    className="btn btn-danger" 
                    type="button" 
                    onClick={ ()=>confirmProductDelete(product.id) }
                >
                    Delete
                </button>
                <button 
                    className="btn ml-2  btn-warning" 
                    type="button"
                    onClick={()=>goToEdition(product)}    
                >Modify</button>
            </td>
        </tr>
    );
}
export default SingleProduct;
