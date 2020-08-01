import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function NewNavBar(props){
 
    var divFirstStyle = {
     minWidth: '650px',
   }

   


   return (
<nav className="navbar navbar-expand-xl navbar-light zindex-fixed">
      <div className="container">

   
        <Link className="navbar-brand" to={'/'}>
          ExcWha.
        </Link>

  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBoxedTopCollapse" aria-controls="navbarBoxedTopCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="navbarBoxedTopCollapse">

       
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">

             
              <a className="nav-link" data-toggle="dropdown" href="#">Home</a>

          

            </li>
            <li className="nav-item dropdown">

             
              <a className="nav-link" data-toggle="dropdown" href="#">Shop</a>

          
         
            </li>
            <li className="nav-item dropdown">

             
              <a className="nav-link" data-toggle="dropdown" href="#">Pages</a>

         
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
            <li className="nav-item">
              <a className="nav-link" href="docs/getting-started.html">Docs</a>
            </li>
          </ul>

       
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
          
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link" to={'/signin'}>
                <i className="fe fe-user"></i>
              </Link>
            </li>
         
            <li className="nav-item ml-lg-n4">
              <Link className="nav-link"  to={'/cart'}>
                <span data-cart-items="2">
                  <i className="fe fe-shopping-cart"></i>
                </span>
              </Link>
            </li>
          </ul>

        </div>

      </div>
    </nav>
   );
}

export default NewNavBar;