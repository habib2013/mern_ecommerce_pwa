import React, { Component } from 'react';

const SummerCloth = () => {

   var divStyle1 = {
      backgroundImage: 'url(assets/img/covers/cover-5.jpg)'
    }
    
    var backdivStyle1 = {
      backgroundImage: 'url(assets/img/products/product-24.jpg)'
    }
    var backdivStyle2 = {
      backgroundImage: 'url(assets/img/products/product-23.jpg)'
    }
    
    
    
    
    var divStyle2 = {
      minHeight: '280px',
    }
    var backdivStyle5 = {
      backgroundImage: 'url(assets/img/products/product-22.jpg)'
    }


   return ( 
<section className="pt-6">
   <div className="container-fluid px-3 px-md-6">
     <div className="row mx-n3">
       <div className="col-12 col-sm-4 d-flex flex-column px-3">

         <div className="card card-xl mb-3 mb-sm-0" style={divStyle2}>

           <div className="card-bg">
             <div className="card-bg-img bg-cover" style={backdivStyle5}></div>
           </div>

           <div className="card-body my-auto">

             <h5 className="mb-0">Summer Hats</h5>

             <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
               Shop Now <i className="fe fe-arrow-right ml-2"></i>
             </a>

           </div>

         </div>

       </div>
       <div className="col-12 col-sm-4 d-flex flex-column px-3">

         <div className="card card-xl mb-3 mb-sm-0" style={divStyle2}>

           <div className="card-bg">
             <div className="card-bg-img bg-cover" style={backdivStyle2}></div>
           </div>

           <div className="card-body my-auto">

             <h5 className="mb-0">Men Hats</h5>

             <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
               Shop Now <i className="fe fe-arrow-right ml-2"></i>
             </a>

           </div>

         </div>

      
       </div>
       <div className="col-12 col-sm-4 d-flex flex-column px-3">

         <div className="card card-xl bg-cover bg-hover" style={divStyle2}>

           <div className="card-bg">
             <div className="card-bg-img bg-cover" style={backdivStyle1}></div>
           </div>

           <div className="card-body my-auto">

             <h5 className="mb-0">Floral Dresses</h5>

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
 
export default SummerCloth;