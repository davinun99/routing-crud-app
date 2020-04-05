import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/ProductActions";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const EditProduct = ()=>{
    const [ productEdited, setProductEdited ] = useState({
        name : '',
        price : 0
    });
    const dispatch = useDispatch();
    const toEditproduct = useSelector( state=>state.products.selectedProductId );

    useEffect( ()=>{
        setProductEdited( toEditproduct );
    },[toEditproduct] );

    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch( editProductAction( productEdited ) );
        history.push( `/`);
    }
    
    const handleChangeForm = e => {
        let value;
        if(e.target.name === 'price') 
            value = Number(e.target.value);
        else
            value = e.target.value;
        setProductEdited({
            ...productEdited,
            [e.target.name] : value
        });
    }
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Modify product
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product name</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="iPhone"
                                    name="name"
                                    onChange={handleChangeForm}
                                    value={productEdited.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="999"
                                    name="price"
                                    value={productEdited.price}
                                    onChange={handleChangeForm}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditProduct;
