import React, { Component } from 'react';

const BonusTrack = () => {
   return ( <section className="py-9">
   <div className="container">
     <div className="row">
       <div className="col-12 col-md-6 col-lg-3">

         <div className="d-flex mb-6 mb-lg-0">

           <i className="fe fe-truck font-size-lg text-primary"></i>

           <div className="ml-6">

             <h6 className="heading-xxs mb-1">
               Free shipping
             </h6>

             <p className="mb-0 font-size-sm text-muted">
               From all orders over $100
             </p>

           </div>

         </div>

       </div>
       <div className="col-12 col-md-6 col-lg-3">

         <div className="d-flex mb-6 mb-lg-0">

           <i className="fe fe-repeat font-size-lg text-primary"></i>

           <div className="ml-6">

             <h6 className="mb-1 heading-xxs">
               Free returns
             </h6>

             <p className="mb-0 font-size-sm text-muted">
               Return money within 30 days
             </p>

           </div>

         </div>

       </div>
       <div className="col-12 col-md-6 col-lg-3">

         <div className="d-flex mb-6 mb-md-0">

           <i className="fe fe-lock font-size-lg text-primary"></i>

           <div className="ml-6">

             <h6 className="mb-1 heading-xxs">
               Secure shopping
             </h6>

             <p className="mb-0 font-size-sm text-muted">
               You're in safe hands
             </p>

           </div>

         </div>

       </div>
       <div className="col-12 col-md-6 col-lg-3">

         <div className="d-flex">

           <i className="fe fe-tag font-size-lg text-primary"></i>

           <div className="ml-6">

             <h6 className="mb-1 heading-xxs">
               Over 10,000 Styles
             </h6>

             <p className="mb-0 font-size-sm text-muted">
               We have everything you need
             </p>

           </div>

         </div>

       </div>
     </div>
   </div>
 </section>);
}
 
export default BonusTrack;