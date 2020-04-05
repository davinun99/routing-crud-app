import React from "react";
// Redux actions
import { createNewProductAction } from '../actions/ProductActions'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { showAlertAction, hideAlertAction } from "../actions/AlertaAction";
const CreateProduct = ( {history} ) => {
    const [ name, setName ] = useState( '' );
    const [ price, setPrice ] = useState( 0 );

    const dispatch = useDispatch();

    const loading = useSelector( (state)=> state.products.loading );
    const error = useSelector( (state)=> state.products.error );
    const alert = useSelector( state=>state.alert.alert );
    const addProduct = ( product ) => dispatch( createNewProductAction( product ) );
    const handleSubmit = ( e )=>{
        e.preventDefault();
        //validate form
        if( name.trim() === '' || price <= 0 ){
            const response = {
                message : 'Both inputs are mandatory',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(showAlertAction( response ));
        }else{
            //create product
            dispatch( hideAlertAction() );
            addProduct({
                name,
                price
            });
            history.push('/')
        }
    }
    
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Create new product
                        </h2>
                        {alert ? <p className= {alert.classes}>{alert.message}</p> : null}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="iPhone"
                                    name="name"
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="999"
                                    name="price"
                                    value={price}
                                    onChange={e=>setPrice(Number(e.target.value))}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Add Product
                            </button>
                        </form>
                        {
                            loading ?
                            <p className="alert alert-info p2 mt-4 text-center">Loading...</p> :
                            null
                        }
                        {
                            error ?
                            <p className="alert alert-danger p2 mt-4 text-center">Error!</p> :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateProduct;
