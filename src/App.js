import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Product from './components/Product';
import EditProduct from './components/EditProduct';
import Header from './components/Header';

import { Provider } from 'react-redux';
import store from './store';
const App = ()=>{
    return(
        <Router>
            <Provider store = {store}>
                <Header/>
                <main className="container mt-5">
                    <Switch>
                        <Route exact path="/products/create" component={CreateProduct}/>
                        <Route exact path="/products/edit/:id" component={EditProduct}/>
                        {/*<Route exact path="/products/:id" component={Product}/> */}
                        <Route exact path="/products" component={Product}/>
                        <Route exact path="/" component={Product}/>
                    </Switch>
                </main>
                <p className="mt-4 p2 text-center">David Núñez - React JS Developer</p>
            </Provider>
        </Router>
        
        
    );
}

export default App;