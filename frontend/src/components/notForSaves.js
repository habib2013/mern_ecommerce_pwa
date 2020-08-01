import React, { Component,useEffect,useState } from 'react';

import NavBar from './navBar';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Reviews from './reviews';
import HappyHoliday from './happyHoliday';
import CustomerReview from './customerReview';
import ProductDescription from './productDescription';
import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function SingleProduct(props){

  const [qty, setQty] = useState(1);

const productDetails = useSelector(state => state.productDetails);
const {product,loading,error} = productDetails;
const dispatch = useDispatch();

useEffect(() => {
  dispatch(detailsProduct(props.match.params.id));
  return () => {
    
  }
}, []);

const handleAddToCart = () => {
   props.history.push('/cart/' + props.match.params.id + "?qty=" + qty);
}


// var getProductImage  = '../' + product.image;
// console.log(getProductImage);

var labelHeight = {
   minWidth: '113px',
 }


var labelImage = {
   backgroundImage: 'url(../assets/img/products/product-7.jpg)'
 }

return (
<React.Fragment>
   <HappyHoliday/>
<NavBar/>
<Link to="/"> <i className="fa fa-arrow-back"></i> Back</Link>

{loading ? <div>Loading ...</div> : error ? <div>{error}</div>: 
<section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">x
              <div className="col-12 col-md-6">

             
                <div className="card">

                  <div className="badge badge-primary card-badge text-uppercase">
                    Sale
                  </div>


                </div>

                <div className="flickity-nav mx-n2 mb-10 mb-md-0" data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'>

                  <div className="col-12 px-2" style={labelHeight}>

<img  className="embed-responsive embed-responsive-1by1 bg-cover" src={'../' + product.image}/>
                  </div>

                  

                </div>

              </div>
              <div className="col-12 col-md-6 pl-lg-10">

                <div className="row mb-1">
                  <div className="col">

                    <a className="text-muted" href="shop.html">{product.category}</a>

                  </div>
                  <div className="col-auto">

                    <div className="rating font-size-xs text-dark" data-value="4">
                      <div className="rating-item">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-item">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-item">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-item">
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="rating-item">
                        <i className="fa fa-star"></i>
                      </div>
                    </div>

                    <a className="font-size-sm text-reset ml-2" href="#reviews">
                      Reviews (6)
                    </a>

                  </div>
                </div>

<h3 className="mb-2 text-capitalize">{product.name}</h3>

                <div className="mb-7">
                  <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">$115.00</span>
<span className="ml-1 font-size-h5 font-weight-bolder text-primary">{product.price}</span>
<span className="font-size-sm ml-1"> {product.numberInsStock > 0 && <p>In Stock</p> }</span>
                </div>

                <form>
                  <div className="form-group">

                    <p className="mb-5">
                      Color: <strong id="colorCaption">White</strong>
                    </p>

                    <div className="mb-8 ml-n1">
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="White" checked/>
                        <label className="custom-control-label" for="imgRadioOne">
                          <span className="embed-responsive embed-responsive-1by1 bg-cover" style={labelImage}></span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input type="radio" className="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="Black"/>
                        <label className="custom-control-label" for="imgRadioTwo">
                          <span className="embed-responsive embed-responsive-1by1 bg-cover" style={labelImage}></span>
                        </label>
                      </div>
                    </div>

                  </div>
                  <div className="form-group">

                    <p className="mb-5">
                      Size: <strong><span id="sizeCaption">7.5</span> US</strong>
                    </p>

                    <div className="mb-2">
                     
                     
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFourteen" value="14" data-toggle="form-caption" data-target="#sizeCaption"/>
                        <label className="custom-control-label" for="sizeRadioFourteen">14</label>
                      </div>
                    </div>

                    <p className="mb-8">
                      <img src="../assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid"/> <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                    </p>

                    <div className="form-row mb-7">
                      <div className="col-12 col-lg-auto">
{product.numberInsStock > 0 &&   <select value={qty} onChange={(e) => {setQty(e.target.value)}} className="custom-select mb-2">
                   {[...Array(product.numberInsStock).keys()].map(x => 
                    <option key={x + 1} value={x + 1}> {x + 1}</option>
                    )}
                        </select>}
                      

                      </div>
                      <div className="col-12 col-lg">

                      {product.numberInsStock > 0 ? <button type="submit" onClick={handleAddToCart} className="btn btn-block btn-dark mb-2">
                          Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
                        </button> : <div>Out Of Stock</div> }  

                      </div>
                      <div className="col-12 col-lg-auto">

                        <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                          Wishlist <i className="fe fe-heart ml-2"></i>
                        </button>

                      </div>
                    </div>

                    <p>
                      <span className="text-gray-500">Is your size/color sold out?</span>
                      <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the Wait List!</a>
                    </p>

                    <p className="mb-0">
                      <span className="mr-4">Share:</span>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </p>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

}



   
<ProductDescription/>


<CustomerReview/>

<Footer/>
</React.Fragment>
)
}

export default SingleProduct;