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
import NewNavBar from './newNavBar';

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

  
 var divFirstStyle = {
  minWidth: '113px',
}
var divSecondStyle = {
  minHeight: '185px',
}
var divThirdStyle = {
  minHeight: '490px',
}

var divFourthStyle = {
  minHeight: '320px',
}


var backdivStyle5 = {
  backgroundImage: 'url(assets/img/products/product-7.jpg)'
}

var backdivStyle6 = {
  backgroundImage: 'url(assets/img/products/product-122.jpg)'
}

var backdivStyle7 = {
  backgroundImage: 'url(assets/img/products/product-146.jpg)'
}

var backdivStyle8 = {
  backgroundImage: 'url(assets/img/products/product-7.jpg)'
}
var backdivStyle9 = {
  backgroundImage: 'url(assets/img/products/product-46.jpg)'
}

var backdivStyle10 = {
  backgroundImage: 'url(assets/img/products/product-49.jpg)'
}

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
<React.Fragment>
<NewNavBar/>
<nav class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <ol class="breadcrumb mb-0 font-size-xs text-gray-400">
              <li class="breadcrumb-item">
                <a class="text-gray-400" href="index-2.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-gray-400" href="shop.html">Women's Shoes</a>
              </li>
              <li class="breadcrumb-item active">
                Leather Sneakers
              </li>
            </ol>

          </div>
        </div>
      </div>
    </nav>
    {loading ? <div>Loading ...</div> : error ? <div>{error}</div>: 
    
    <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="card">
                <div class="badge badge-primary card-badge text-uppercase">
                  Sale
                </div>
                <div class="mb-4" data-flickity='{"draggable": false, "fade": true}' id="productSlider">
                  <a href="assets/img/products/product-7.jpg" data-fancybox>
                 </a>
                 

                </div>

              </div>

             
              <div class="flickity-nav mx-n2 mb-10 mb-md-0" data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'>

             
                <div class="col-12 px-2" style={divSecondStyle}>

                  
                <img  className="embed-responsive embed-responsive-1by1 bg-cover" src={'../' + product.image}/>
  
                </div>

            

              </div>

            </div>
            <div class="col-12 col-md-6 pl-lg-10">

              
              <div class="row mb-1">
                <div class="col">

                
                  <a class="text-muted" href="shop.html">{product.category}</a>

                </div>
                <div class="col-auto">

                 
                  <div class="rating font-size-xs text-dark" data-value="4">
                    <div class="rating-item">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-item">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-item">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-item">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="rating-item">
                      <i class="fas fa-star"></i>
                    </div>
                  </div>

                  <a class="font-size-sm text-reset ml-2" href="#reviews">
                    Reviews (6)
                  </a>

                </div>
              </div>

             
              <h3 class="mb-2">{product.name}</h3>

             
              <div class="mb-7">
                <span class="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">$115.00</span>
<span class="ml-1 font-size-h5 font-weight-bolder text-primary">${product.price}</span>
<span class="font-size-sm ml-1"> {product.numberInsStock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
              </div>

           
              <form>
                <div class="form-group">

             
                  <p class="mb-5">
                    Color: <strong id="colorCaption">{product.color}</strong>
                  </p>

                 
                  <div class="mb-8 ml-n1">
                    <div class="custom-control custom-control-inline custom-control-img">
                      <input type="radio" class="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="White" checked/>
                      <label class="custom-control-label" for="imgRadioOne">
                        <span class="embed-responsive embed-responsive-1by1 bg-cover" style={backdivStyle8}></span>
                      </label>
                    </div>
                    <div class="custom-control custom-control-inline custom-control-img">
                      <input type="radio" class="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="Black"/>
                      <label class="custom-control-label" for="imgRadioTwo">
                        <span class="embed-responsive embed-responsive-1by1 bg-cover" style={backdivStyle10}></span>
                      </label>
                    </div>
                  </div>

                </div>
                <div class="form-group">

             
                  <p class="mb-5">
                    Size: <strong><span id="sizeCaption">{product.size}</span> US</strong>
                  </p>

                
                  <p class="mb-8">
                    <img src="assets/img/icons/icon-ruler.svg" alt="..." class="img-fluid"/> <a class="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                  </p>

                  <div class="form-row mb-7">
                    <div class="col-12 col-lg-auto">

                    
                    {product.numberInsStock > 0 &&   <select value={qty} onChange={(e) => {setQty(e.target.value)}} className="custom-select mb-2">
                   {[...Array(product.numberInsStock).keys()].map(x => 
                    <option key={x + 1} value={x + 1}> {x + 1}</option>
                    )}
                        </select>}

                    </div>
                    <div class="col-12 col-lg">

                    {product.numberInsStock > 0 ? <button type="submit" onClick={handleAddToCart} className="btn btn-block btn-dark mb-2">
                          Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
                        </button> : <div>Out Of Stock</div> }  


                    </div>
                    <div class="col-12 col-lg-auto">

                      
                      <button class="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                        Wishlist <i class="fe fe-heart ml-2"></i>
                      </button>

                    </div>
                  </div>

                 
                  <p class="mb-0">
                    <span class="mr-4">Share:</span>
                    <a class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                      <i class="fab fa-pinterest-p"></i>
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

  

<br/>


</React.Fragment>
)
}

export default SingleProduct;