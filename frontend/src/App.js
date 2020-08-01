import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import SingleProduct from './components/singleProduct';
import HomeComponent from './components/homeComponent';
import CartComponent from './components/cartComponent';
import SignInComponent from './components/signInComponent';
import RegisterComponent from './components/registerComponent';
import ProductComponent from './components/productComponent';
import ShippingComponent from './components/shippingComponent';
import PaymentComponent from './components/paymentComponent';
import PlaceOrderComponent from './components/placeOrderComponent';



class App extends Component {
  state = {  }
  render() { 



    return (

<BrowserRouter>
   <Route path="/" exact component={HomeComponent}/>
   <Route path="/signin" exact component={SignInComponent}/>
   <Route path="/products" exact component={ProductComponent}/>
   <Route path="/shipping" exact component={ShippingComponent}/>
   <Route path="/payment" exact component={PaymentComponent}/>
   <Route path="/placeorder" exact component={PlaceOrderComponent}/>
   <Route path="/register" exact component={RegisterComponent}/>
   <Route path="/products/:id"  render={(props) => <SingleProduct {...props}/>}/>
   <Route path="/cart/:id?"  render={(props) => <CartComponent {...props}/>}/>

</BrowserRouter>


     );
  }
}
 
export default App;