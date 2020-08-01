import React, { Component } from 'react';


function NewFooter(props){
   var coverdivStyle10 = {
      backgroundImage: 'url(assets/img/covers/cover-11.jpg)'
    }
    
    var coverdivStyle12 = {
      backgroundImage: 'url(assets/img/covers/cover-12.jpg)'
    }
    
    var coverdivStyle13 = {
      backgroundImage: 'url(assets/img/patterns/pattern-2.svg)'
    }
return (
   
   <div class="container px-0">
   <div class="row no-gutters">
     <div class="col-12">

       <footer class="@@classList">
         <div class="py-12 bg-dark bg-cover" style={coverdivStyle13}>
           <div class="container">
             <div class="row">
               <div class="col-12 text-center">

     
                 <h2 class="mb-7 text-white">Shopper.</h2>

                 <ul class="list-inline mb-7">
                   <li class="list-inline-item px-3">
                     <a class="text-gray-300" href="contact-us.html">Contact Us</a>
                   </li>
                   <li class="list-inline-item px-3">
                     <a class="text-gray-300" href="faq.html">FAQs</a>
                   </li>
                   <li class="list-inline-item px-3">
                     <a class="text-gray-300" data-toggle="modal" href="#modalSizeChart">Size Guide</a>
                   </li>
                   <li class="list-inline-item px-3">
                     <a class="text-gray-300" href="shipping-and-returns.html">Shipping & Returns</a>
                   </li>
                   <li class="list-inline-item px-3">
                     <a class="text-gray-300" href="about.html">Our Story</a>
                   </li>
                 </ul>

                 <ul class="list-inline font-size-lg">
                   <li class="list-inline-item">
                     <a class="text-gray-300" href="#!">
                       <i class="fab fa-facebook"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a class="text-gray-300" href="#!">
                       <i class="fab fa-youtube"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a class="text-gray-300" href="#!">
                       <i class="fab fa-twitter"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a class="text-gray-300" href="#!">
                       <i class="fab fa-instagram"></i>
                     </a>
                   </li>
                   <li class="list-inline-item">
                     <a class="text-gray-300" href="#!">
                       <i class="fab fa-medium"></i>
                     </a>
                   </li>
                 </ul>

               </div>
             </div>
           </div>
         </div>
         <div class="py-6">
           <div class="container">
             <div class="row">
               <div class="col">

                 <p class="mb-3 mb-md-0 font-size-xxs text-muted">
                   © 2019 All rights reserved. Designed by Unvab.
                 </p>

               </div>
               <div class="col-auto">

                 <img class="footer-payment" src="assets/img/payment/mastercard.svg" alt="..."/>
                 <img class="footer-payment" src="assets/img/payment/visa.svg" alt="..."/>
                 <img class="footer-payment" src="assets/img/payment/amex.svg" alt="..."/>
                 <img class="footer-payment" src="assets/img/payment/paypal.svg" alt="..."/>
                 <img class="footer-payment" src="assets/img/payment/maestro.svg" alt="..."/>
                 <img class="footer-payment" src="assets/img/payment/klarna.svg" alt="..."/>

               </div>
             </div>
           </div>
         </div>
       </footer>


     </div>
   </div>
 </div>
);
}

export default NewFooter;