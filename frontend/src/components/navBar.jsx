import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
   var backdivStyle3 = {
      backgroundImage: 'url(assets/img/products/product-2.jpg)'
    }
    var backdivStyle4 = {
      backgroundImage: 'url(assets/img/products/product-3.jpg)'
    }
   
    var backdivStyle6 = {
      backgroundImage: 'url(assets/img/products/product-111.jpg)'
    }

    var divSmall = {
      minHeight: '150px',
    }
    var divBig = {
      minHeight: '650px',
    }
    
    var divSmaller = {
      minHeight: '330px',
    }
    

   return ( 

      <nav className="navbar navbar-expand-xl navbar-light @@classList">
      <div className="container">
     
        <a className="navbar-brand d-xl-none" href="overview.html">
        Excwha.
        </a>
    
     
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarClassicCollapse" aria-controls="navbarClassicCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className="collapse navbar-collapse" id="navbarClassicCollapse">
     
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
     
              <a className="nav-link" data-toggle="dropdown" href="#">Home</a>
     
              <div className="dropdown-menu">
                <div className="card card-lg">
                  <div className="card-body">
                    <ul className="list-styled font-size-sm">
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-2.html">Default</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-classic.html">Classic</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-fashion.html">Fashion</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-boxed.html">Boxed</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-simple.html">Simple</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-asymmetric.html">Asymmetric</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-sidenav.html">Sidenav</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="index-landing.html">Landing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
     
     
            </li>
            <li className="nav-item dropdown position-static">
     
              <a className="nav-link" data-toggle="dropdown" href="#">Catalog</a>
     
              <div className="dropdown-menu w-100">
                <div className="card card-lg">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-4 col-md">
     
                          <div className="mb-5 font-weight-bold">Women</div>
     
                          <ul className="list-styled mb-0 font-size-sm">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Clothing</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Shoes</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Dresses</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Bags</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Accessories</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Sunglasses</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Denim</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Boots</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Jewelry</a>
                            </li>
                          </ul>
     
                        </div>
                        <div className="col-4 col-md">
     
                          <div className="mb-5 font-weight-bold">Men</div>
     
                          <ul className="list-styled mb-0 font-size-sm">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Clothing</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Shoes</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Coats & Jackets</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Bags</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Accessories</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Sunglasses</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Denim</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Sneakers</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Watches</a>
                            </li>
                          </ul>
     
                        </div>
                        <div className="col-4 col-md">
     
                          <div className="mb-5 font-weight-bold">Kids</div>
     
                          <ul className="list-styled mb-0 font-size-sm">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Clothing</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Shoes</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Accessories</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Sunglasses</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Denim</a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="shop.html">Boots</a>
                            </li>
                          </ul>
     
                        </div>
                        <div className="d-none d-md-flex flex-column col-md-3">
     
                          <div className="card mb-7 bg-cover" style={divSmall}>
     
                            <div className="card-bg">
                            <div className="card-bg-img bg-cover" style={backdivStyle3}></div>
                            </div>
     
                            <div className="card-body my-auto px-7">
                              <a className="stretched-link font-weight-bold text-body" href="shop.html">
                                Men's Shirts
                              </a>
                            </div>
     
                          </div>
     
                          <div className="card bg-cover" style={divSmall}>
     
                            <div className="card-bg">
                              <div className="card-bg-img bg-cover" style={backdivStyle4}></div>
                            </div>
     
                            <div className="card-body my-auto px-7">
                              <a className="stretched-link font-weight-bold text-body" href="shop.html">
                                Floral Dresses
                              </a>
                            </div>
     
                          </div>
     
                        </div>
                        <div className="d-none d-md-flex flex-column col-md-3">
     
                          <div className="card bg-cover" style={divSmaller}>
     
                            <div className="card-bg">
                            <div className="card-bg-img bg-cover" style={backdivStyle6}></div>
                            </div>
     
                            <div className="card-body my-auto text-center">
                              <a className="stretched-link text-white" href="shop.html">
                                <h1 className="mb-1 font-weight-bolder text-uppercase">50% off</h1>
                                <h6>Women’s Watches</h6>
                              </a>
                            </div>
     
                          </div>
     
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     
     
            </li>
            <li className="nav-item dropdown">
     
              <a className="nav-link" data-toggle="dropdown" href="#">Shop</a>
     
              <div className="dropdown-menu" style={divBig}>
                <div className="card card-lg">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
     
                        <div className="mb-5 font-weight-bold">Shop</div>
     
                        <ul className="list-styled mb-7 font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shop.html">Default</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shop-topbar.html">Topbar</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shop-collapse.html">Collapse</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shop-simple.html">Simple</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shop-masonry.html">Masonry</a>
                          </li>
                        </ul>
     
                        <div className="mb-5 font-weight-bold">Product</div>
     
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="product.html">Default</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="product-images-left.html">Images Left</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="product-image-grid.html">Image Grid</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="product-image-slider.html">Image Slider</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="product-images-stacked.html">Images Stacked</a>
                          </li>
                        </ul>
     
                      </div>
                      <div className="col">
     
                        <div className="mb-5 font-weight-bold">Support</div>
     
                        <ul className="list-styled mb-7 font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="checkout.html">Checkout</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="order-completed.html">Order Completed</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="shipping-and-returns.html">Shipping & Returns</a>
                          </li>
                        </ul>
     
                        <div className="mb-5 font-weight-bold">Account</div>
     
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-order.html">Order</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-orders.html">Orders</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-wishlist.html">Wishlist</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-personal-info.html">Personal Info</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-address.html">Addresses</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-address-edit.html">Addresses: New</a>
                          </li>
                        </ul>
     
                      </div>
                      <div className="col">
     
                        <ul className="list-styled mb-7 font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-payment.html">Payment</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-payment-edit.html">Payment: New</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="account-payment-choose.html">Payment: Choose</a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="auth.html">Auth</a>
                          </li>
                        </ul>
     
                        <div className="mb-5 font-weight-bold">Modals</div>
     
                        <ul className="list-styled font-size-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                              Newsletter: Horizontal
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                              Newsletter: Vertical
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                              Product
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                              Search
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                              Shopping Cart
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                              Size Chart
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                              Wait List
                            </a>
                          </li>
                        </ul>
     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     
     
            </li>
          
            <li className="nav-item dropdown">
     
              <a className="nav-link" data-toggle="dropdown" href="#">Blog</a>
     
              <div className="dropdown-menu">
                <div className="card card-lg">
                  <div className="card-body">
                    <ul className="list-styled font-size-sm">
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="blog.html">Blog</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="blog-post.html">Blog Post</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
     
     
            </li>
       
          </ul>
     
          <a className="navbar-brand mx-auto d-none d-xl-block" href="overview.html">
          Excwha.
          </a>
     
          <ul className="navbar-nav nav-divided">
     
          
            <li className="nav-item dropdown">
     
              <a className="nav-link text-body dropdown-toggle" data-toggle="dropdown" href="#">EN</a>
     
              <div className="dropdown-menu">
                <div className="card card-lg">
                  <div className="card-body">
                    <ul className="list-styled font-size-sm">
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="#!">English</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="#!">French</a>
                      </li>
                      <li className="list-styled-item">
                        <a className="list-styled-link" href="#!">German</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
     
            </li>
          </ul>
     
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" href="#modalSearch">
                <i className="fe fe-search"></i>
              </a>
            </li>
            <li className="nav-item ml-lg-n4">
              <a className="nav-link" href="account-orders.html">
                <i className="fe fe-user"></i>
              </a>
            </li>
            <li className="nav-item ml-lg-n4">
              <a className="nav-link" href="account-wishlist.html">
                <i className="fe fe-heart"></i>
              </a>
            </li>
            <li className="nav-item ml-lg-n4">
              <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i className="fe fe-shopping-cart"></i>
                </span>
              </a>
            </li>
          </ul>
     
        </div>
     
      </div>
     </nav>
     

    );
}
 
export default NavBar;