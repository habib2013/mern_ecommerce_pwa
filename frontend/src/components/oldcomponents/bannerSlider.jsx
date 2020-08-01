import React, { Component } from 'react';

const BannerSlider = () => {

   var divStyle1 = {
      backgroundImage: 'url(assets/img/covers/cover-5.jpg)'
    }
    
    var backdivStyle1 = {
      backgroundImage: 'url(assets/img/covers/cover-23.jpg)'
    }
    var backdivStyle2 = {
      backgroundImage: 'url(assets/img/covers/cover-16.jpg)'
    }
    
  
    var divStyle2 = {
      minHeight: '550px',
    }
    var backdivStyle5 = {
      backgroundImage: 'url(assets/img/products/product-111.jpg)'
    }

   return ( 

<section>
   <div data-flickity='{"prevNextButtons": true, "fade": true}'>

   <div className="w-100 bg-cover" style={backdivStyle1}>
       <div className="container d-flex flex-column">
         <div className="row align-items-center justify-content-end py-12" style={divStyle2}>
           <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-n1">

             <h1 className="mb-5">Summer Collection</h1>

             
             <p className="mb-8 font-size-lg text-gray-500">
               So called give, one whales tree seas dry place own
               day, winged tree created spirit.
             </p>

             <a className="btn btn-dark" href="shop.html">
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
 
export default BannerSlider;