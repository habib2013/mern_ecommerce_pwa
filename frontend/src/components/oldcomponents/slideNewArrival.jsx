import React, { Component,useState,useEffect } from 'react';
import SingleSider from './singleSlider';
import data from '../data';
import axios from 'axios';

class SlideNewArrival extends Component {

   state = { 
    products :data.products,
    requiredItem:0,
    };
  
    async componentDidMount() {
  const {data:products} = await axios.get('/api/products');
 this.setState({products});
};


 replaceModalItem = (index) => {  
  this.setState({
    requiredItem: index
  });
}
   
render() { 
      var divStyle2 = {
         maxWidth: '300px',
       }
const products = this.state.products.map((item,index) => {
  return (
    <div className="col" style={divStyle2}>
  <div className="card">
    <div className="card-img">
      <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
        <i className="fe fe-heart"></i>
      </button>
      <button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct"   onClick={() => this.replaceModalItem(index)}>
        <i className="fe fe-eye mr-2 mb-1"></i> Quick View
      </button>
      <img className="card-img-top" src={item.image} alt="..."/>
    </div>
    <div className="card-body font-weight-bold text-center">
      <a className="text-body " href="product.html">{item.name}</a> 
<span className="text-muted pl-2">{item.price}</span>
    </div>
  </div>
</div>
  );
});


const requiredItem = this.state.requiredItem;
console.log(requiredItem);



let modalData = this.state.products[requiredItem];
return(
  <React.Fragment>
<section className="py-12">
   <div className="container">
     <div className="row">
       <div className="col-12">

         <h2 className="mb-10 text-center">New Arrivals</h2>

         <div className="flickity-page-dots-progress" data-flickity='{"pageDots": true}'>

{products}
</div>

       </div>
     </div>
   </div>
   </section>
   <SingleSider
  productImage = {modalData.image}
  productName = {modalData.name}
  productType = {modalData.productType}

  productPrice = {modalData.price}
  productInStock = {modalData.numberInsStock}
  productSize = {modalData.size}
   />
</React.Fragment>
);
   

       
   }
}
 
export default SlideNewArrival;
