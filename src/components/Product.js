import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/ProductActions";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Product = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        //get data form api
        const loadProducts = () => dispatch( getProductsAction() );
        loadProducts();
    },[dispatch]);
    const products  = useSelector( state => state.products.products );
    const error = useSelector( state => state.products.error );
    const loading = useSelector( state => state.products.loading );
    return(
        <Fragment>
            <h2 className="text-center my-5">
                Products list
            </h2>
            { error ?
                <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> :
                null
            }
            { loading ?
                <p className="font-weight-bold alert alert-info text-center mt-4">Loading...</p> :
                null
            }
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0 ? 
                        null:
                        products.map((product)=>(
                            <SingleProduct
                                key = {product.id}
                                product = {product}
                            />
                        ))}
                </tbody>
            </table>
        </Fragment>
    );
}
export default Product;
