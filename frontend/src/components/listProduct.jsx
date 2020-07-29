import React, { Component,useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { listProducts } from '../actions/productActions';

function ListProduct(props) {


const productList = useSelector(state => state.productList);
const {products,loading,error} = productList;
 const dispatch = useDispatch();

useEffect(() => {
dispatch(listProducts());
  
   return () => {
      
   }
}, [])

   var color1 = {
      color:'beige'
    }
    var color2 = {
      color:'black'
    }
   return( loading ? <div>loading...</div> : error ? <div>{error}</div> :

      <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">

            <h6 className="heading-xxs mb-3 text-center text-gray-400">
              Top selling
            </h6>

            <h2 className="mb-10 text-center">Top wekeend Sellers</h2>

          </div>
        </div>
        <div className="row">

{products.map(product => 
        <div className="col-6 col-sm-6 col-md-4 col-lg-3">

        <div className="card mb-7" data-toggle="card-collapse">

          <div className="badge badge-white card-badge card-badge-left text-uppercase">
            New
          </div>

          <div className="card-img" data-flickity='{"draggable": false}' id="productOneImg">

            <Link className="d-block w-100" to={'/products/' + product._id }>

              <img className="card-img-top" src={product.image} alt="..." />
            </Link>
          
           
          </div>

          <div className="card-collapse-parent">

            <div className="card-body px-0 pb-0 bg-white">
              <div className="row no-gutters">
                <div className="col">

                  <a className="d-block font-weight-bold text-body" href="product.html">
                  {product.name}
                  </a>

                  <a className="font-size-xs text-muted" href="shop.html">
                  {product.category}
                  </a>

                </div>
                <div className="col-auto">

                  <div className="font-size-sm font-weight-bold text-muted">
                 {product.price}
                  </div>

                </div>
              </div>
            </div>

            <div className="card-collapse collapse">
              <div className="card-footer px-0 bg-white">
                <form>
                  <div className="mb-1">
                    <div className="custom-control custom-control-inline custom-control-color">
                      <input type="radio" id="productOneColorOne" name="productOneColor" className="custom-control-input" checked />
                      <label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="0" style={color1} htmlFor="productOneColorOne"></label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-color ml-n2">
                      <input type="radio" id="productOneColorTwo" name="productOneColor" className="custom-control-input" />
                      <label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="1" style={color2} htmlhtmlFor="productOneColorTwo"></label>
                    </div>
                  </div>
                  <div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productOneSizeOne" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productOneSizeOne">6</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productOneSizeTwo" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productOneSizeTwo">6.5</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productOneSizeThree" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productOneSizeThree">7</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productOneSizeFour" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productOneSizeFour">7.5</label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-text font-size-xs">
                      <input type="radio" id="productOneSizeFive" name="sizeRadio" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="productOneSizeFive">8.5</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>

   )}

     
   
        </div>

        <div className="row">
          <div className="col-12">
            <div className="mt-7 text-center">
              <a className="link-underline" href="shop.html">Discover more</a>
            </div>
          </div>
        </div>

      </div>
    </section>
   )
}

export default ListProduct;