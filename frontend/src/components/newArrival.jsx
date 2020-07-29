import React, { Component } from 'react';

class NewArrival extends Component {
   state = {  }
   render() { 
      return ( 

<section>
   <div className="container">
     <div className="row">
       <div className="col-12 col-md-6">

         <div className="card card-lg">

           <div className="card-circle card-circle-lg card-circle-right">
             <strong className="font-size-xs text-decoration-line-through opacity-80">$99.00</strong>
             <span className="font-size-h6 font-weight-bold">$59.00</span>
           </div>

           <img className="card-img-top" src="assets/img/products/product-30.jpg" alt="..."/>

           <div className="card-body position-relative mx-6 mx-lg-11 mt-n11 bg-white text-center">

             <h4 className="mb-0">Cropped Trousers</h4>

             <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
               Shop Now <i className="fe fe-arrow-right ml-2"></i>
             </a>

           </div>

         </div>

       </div>
       <div className="col-12 col-md-6">


         <div className="card card-lg">

  
           <div className="card-circle card-circle-lg card-circle-right">
             <strong className="font-size-xs text-decoration-line-through opacity-80">$99.00</strong>
             <span className="font-size-h6 font-weight-bold">$59.00</span>
           </div>

           <img className="card-img-top" src="assets/img/products/product-31.jpg" alt="..."/>

           <div className="card-body position-relative mx-6 mx-lg-11 mt-n11 bg-white text-center">

        
             <h4 className="mb-0">Leather Sneakers</h4>

             <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
               Shop Now <i className="fe fe-arrow-right ml-2"></i>
             </a>

           </div>

         </div>

       </div>
     </div>
   </div>
 </section>
         
       );
   }
}
 
export default NewArrival;