import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import SingleProduct from './components/singleProduct';
import HomeComponent from './components/homeComponent';
import CartComponent from './components/cartComponent';
import SignInComponent from './components/signInComponent';



class App extends Component {
  state = {  }
  render() { 



    return (

<BrowserRouter>
   <Route path="/" exact component={HomeComponent}/>
   <Route path="/signin" exact component={SignInComponent}/>
   <Route path="/products/:id"  render={(props) => <SingleProduct {...props}/>}/>
   <Route path="/cart/:id?"  render={(props) => <CartComponent {...props}/>}/>

</BrowserRouter>


     );
  }
}
 
export default App;