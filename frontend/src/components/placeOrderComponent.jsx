import React, { Component,useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import NavBar from './navBar';
import NewNavBar from './newNavBar';
import CheckOutSteps from './checkOutSteps';

function PlaceOrderComponent(props){

   const cart = useSelector(state => state.cart)
   const {cartItems,shipping,payment} = cart;
   if(!shipping.address){
      props.history.push('/shipping');
   }
   else if(!payment.paymentMethod){
      props.location.push('/payment');
   }

   const dispatch = useDispatch();


useEffect(() => {
 
},[]);

const checkoutHandler = () => {
  props.history.push('/signin?redirect=shipping');
}

return (
   <React.Fragment>
      <NewNavBar/>

      <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
   <section class="pt-7 pb-12">
   <div class="container">
     <div class="row">
       <div class="col-12">

         <h3 class="mb-10 text-center">Shopping Cart</h3>

<div>
   {cart.shipping.address},{cart.shipping.city}
   {cart.shipping.postalcode}, {cart.shipping.country}
</div>
<div>
   Payment Method : {cart.payment.paymentMethod}
</div>

       </div>
     </div>
     <div class="row">
       <div class="col-12 col-md-7">

         <ul class="list-group list-group-lg list-group-flush-x mb-6">
          
{ cartItems.length === 0 ? <div> No Item In Cart</div> : cartItems.map(item => 

<li class="list-group-item">
<div class="row align-items-center">
  <div class="col-3">
<Link to={'/product/' + item.product}>
      <img src={'../' + item.image} alt="..." class="img-fluid"/>
</Link>



  </div>
  <div class="col">

    <div class="d-flex mb-2 font-weight-bold">
<a class="text-body" href="product.html">{item.name}</a> <span class="ml-auto">{item.price}</span>
    </div>

    <p class="mb-7 font-size-sm text-muted">
      Color: {item.color}
    </p>


    <div class="d-flex align-items-center">
Qty : {item.qty}


    </div>

  </div>
</div>
</li>

)}
       

         </ul>

         <div class="row align-items-end justify-content-between mb-10 mb-md-0">
           <div class="col-12 col-md-7">

             <form class="mb-7 mb-md-0">
               <label class="font-size-sm font-weight-bold" for="cartCouponCode">
                 Coupon code:
               </label>
               <div class="row form-row">
                 <div class="col">

                   <input class="form-control form-control-sm" id="cartCouponCode" type="text" placeholder="Enter coupon code*"/>

                 </div>
                 <div class="col-auto">

                
                   <button class="btn btn-sm btn-dark" type="submit">
                     Apply
                   </button>

                 </div>
               </div>
             </form>

           </div>
           <div class="col-12 col-md-auto">

             <button class="btn btn-sm btn-outline-dark">Update Cart</button>

           </div>
         </div>

       </div>
       <div class="col-12 col-md-5 col-lg-4 offset-lg-1">


         <div class="card mb-7 bg-light">
           <div class="card-body">
             <ul class="list-group list-group-sm list-group-flush-y list-group-flush-x">
               <li class="list-group-item d-flex">
                 <span>Subtotal</span> <span class="ml-auto font-size-sm">${cartItems.reduce((a,c) => a + c.price * c.qty,0 )}</span>
               </li>
               <li class="list-group-item d-flex">
                 <span>Tax</span> <span class="ml-auto font-size-sm">$00.00</span>
               </li>
               <li class="list-group-item d-flex font-size-lg font-weight-bold">
                 <span>Total</span> <span class="ml-auto font-size-sm">${cartItems.reduce((a,c) => a + c.price * c.qty,0 )}</span>
               </li>
               <li class="list-group-item font-size-sm text-center text-gray-500">
                 Total Quantity {cartItems.reduce((a,c) => a + c.qty,0 )} *
               </li>
            
             </ul>
           </div>
         </div>

   
         <button onClick={checkoutHandler} class="btn btn-block btn-dark mb-2" disabled={cartItems.length === 0} >Proceed to Checkout</button>

         <Link className="btn btn-link btn-sm px-0 text-body" to={'/'}>
           <i class="fe fe-arrow-left mr-2"></i> Continue Shopping
         </Link>

       </div>
     </div>
   </div>
 </section>
</React.Fragment>
);
}
export default PlaceOrderComponent;