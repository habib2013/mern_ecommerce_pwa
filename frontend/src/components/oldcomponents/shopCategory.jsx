import React, { Component } from 'react';

class ShopCategory extends Component {
   state = {  };


  

   render() { 
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
         maxWidth: '200px',
       }
       var backdivStyle5 = {
         backgroundImage: 'url(assets/img/products/product-22.jpg)'
       }
   

      return ( 
<section className="py-12">
   <div className="container">
     <div className="row">
       <div className="col-12">

         <h2 className="mb-4 text-center">Shop by Category</h2>

         <div className="nav justify-content-center mb-10">
           <a className="nav-link active" href="#topSellersTab" data-toggle="tab">Women</a>
           <a className="nav-link" href="#topSellersTab" data-toggle="tab">Men</a>
           <a className="nav-link" href="#topSellersTab" data-toggle="tab">Kids</a>
         </div>

         
         <div className="tab-content">

           <div className="tab-pane fade show active" id="topSellersTab">

             <div className="flickity-buttons-lg flickity-buttons-offset px-lg-12" data-flickity='{"prevNextButtons": true}'>

               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-25.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

             
                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Dresses <small>(58)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-26.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Tops <small>(35)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-27.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

                     <a className="stretched-link text-body" href="shop.html">
                       <h6>T-shirts <small>(27)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-28.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

  
                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Shoes <small>(64)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

               <div className="col" style={divStyle2}>
                 <div className="card">

      
                   <img className="card-img-top" src="assets/img/products/product-29.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Jeans <small>(12)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-125.jpg" alt="..."/>

                   <div className="card-body py-4 px-0 text-center">

                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Sweatshirts <small>(11)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

           
               <div className="col" style={divStyle2}>
                 <div className="card">

                   <img className="card-img-top" src="assets/img/products/product-126.jpg" alt="..."/>

               
                   <div className="card-body py-4 px-0 text-center">

                     <a className="stretched-link text-body" href="shop.html">
                       <h6>Jackets <small>(9)</small></h6>
                     </a>

                   </div>

                 </div>
               </div>

             </div>

           </div>
         </div>

       </div>
     </div>
   </div>
 </section>

       );
   }
}
 
export default ShopCategory;