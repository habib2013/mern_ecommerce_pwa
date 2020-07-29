import React, { Component } from 'react';
import data from '../data';

class SingleSider extends Component {
constructor(props){
  super(props);
  this.state = {
    // productPrice = {modalData.price}
    // productInStock = {modalData.numberInsStock}
    // productSize = {modalData.size}

    productImage : '',
    productName : '',
    productType : '',

    productPrice : '',
    productInStock : '',
    productSize : '',
  }
}

componentWillReceiveProps(nextProps){
  this.setState({
    productImage:nextProps.productImage,
    productName : nextProps.productName,
    productType : nextProps.productType,

    productPrice : nextProps.productPrice,
    productInStock : nextProps.productInStock,
    productSize : nextProps.productSize,

  })
}
 
   render() { 
      var backdivStyle1 = {
         backgroundImage: 'url(assets/img/products/product-7.jpg)'
       }
       var backdivStyle2 = {
         backgroundImage: 'url(assets/img/products/product-49.jpg)'
       }
       

      return ( 

         <div className="modal fade" id="modalProduct" tabIndex="-1" role="dialog" aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
     <div className="modal-content">

       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
         <i className="fe fe-x" aria-hidden="true"></i>
       </button>

       <div className="container-fluid px-xl-0">
         <div className="row align-items-center mx-xl-0">
           <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">

             <img className="img-fluid" src={this.state.productImage} alt="..."/>

             <a className="btn btn-sm btn-block btn-primary" href="product.html">
               More Product Info <i className="fe fe-info ml-2"></i>
             </a>

           </div>
           <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">

      <h4 className="mb-3">{this.state.productName}</h4>

          
             <div className="mb-7">
      <span className="h5">{this.state.productInStock}</span>
               <span className="font-size-sm">(In Stock)</span>
             </div>

             <form>
               <div className="form-group">

                 <p>
      Type: <strong id="modalProductColorCaption">{this.state.productType}</strong>
                 </p>

                 <div className="mb-8 ml-n1">
                   <div className="custom-control custom-control-inline custom-control-img">
                     <input type="radio" className="custom-control-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="White"/>
                     <label className="custom-control-label" htmlFor="modalProductColorOne">
                       <span className="embed-responsive embed-responsive-1by1 bg-cover" style={backdivStyle1}></span>
                     </label>
                   </div>
                   <div className="custom-control custom-control-inline custom-control-img">
                     <input type="radio" className="custom-control-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" value="Black"/>
                     <label className="custom-control-label" htmlFor="modalProductColorTwo">
                       <span className="embed-responsive embed-responsive-1by1 bg-cover" style={backdivStyle2}></span>
                     </label>
                   </div>
                 </div>

               </div>
               <div className="form-group">

                 <p>
      Size: <strong><span id="modalProductSizeCaption">{this.state.productSize}</span></strong>
                 </p>

                 <div className="mb-2">
                   <div className="custom-control custom-control-inline custom-control-size mb-2">
                     <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeOne" value="6" data-toggle="form-caption" data-target="#modalProductSizeCaption"/>
                     <label className="custom-control-label" htmlFor="modalProductSizeOne">6</label>
                   </div>
                   <div className="custom-control custom-control-inline custom-control-size mb-2">
                     <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwo" value="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled/>
                     <label className="custom-control-label" htmlFor="modalProductSizeTwo">6.5</label>
                   </div>
                   <div className="custom-control custom-control-inline custom-control-size mb-2">
                     <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThree" value="7" data-toggle="form-caption" data-target="#modalProductSizeCaption"/>
                     <label className="custom-control-label" htmlFor="modalProductSizeThree">7</label>
                   </div>
                   <div className="custom-control custom-control-inline custom-control-size mb-2">
                     <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFour" value="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                     <label className="custom-control-label" htmlFor="modalProductSizeFour">7.5</label>
                   </div>
               
                 </div>

               </div>
               <div className="form-group mb-0">
                 <div className="form-row">
                   <div className="col-12 col-lg-auto">

                     <select className="custom-select mb-2">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                     </select>

                   </div>
                   <div className="col-12 col-lg">

                     <button type="submit" className="btn btn-block btn-dark mb-2" >
                       Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
                     </button>

                   </div>
                   <div className="col-12 col-lg-auto">

                     <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                       Wishlist <i className="fe fe-heart ml-2"></i>
                     </button>

                   </div>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>

     </div>
   </div>
 </div>
  
       );
   }
}
 
export default SingleSider;