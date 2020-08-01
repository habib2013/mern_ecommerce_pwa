import React, { Component,useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NewNavBar from './newNavBar';
import NewFooter from './newFooter';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
 

function SignInComponent(props){
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const userSignin = useSelector(state => state.userSignin);
const {loading,userInfo,error} = userSignin;
const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

useEffect(() => {
   if(userInfo){
      props.history.push(redirect);
   }
   return () => {
      //
   }
}, [userInfo]);
var divThirdStyle = {
   maxHeight: '250px',
 }

const submithandler = (e) => {
e.preventDefault();
dispatch(signin(email,password));
}

return (
   
 <React.Fragment>
<NewNavBar/>

<section class="py-12">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">

           
            <div class="card card-lg mb-10 mb-md-0">
              <div class="card-body">

               
                <h6 class="mb-7">Returning Customer</h6>
                    <li>
                     {loading && <div>Loading ...</div>}
                     {error && <div> {error} </div>}
                    </li>

                <form onSubmit={submithandler}>
                  <div class="row">
                    <div class="col-12">

                      
                      <div class="form-group">
                        <label class="sr-only" for="loginEmail">
                          Email Address *
                        </label>
                        <input class="form-control form-control-sm" id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address *" required/>
                      </div>

                    </div>
                    <div class="col-12">

                     
                      <div class="form-group">
                        <label class="sr-only" for="loginPassword">
                          Password *
                        </label>
                        <input class="form-control form-control-sm" id="password" name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password *" required/>
                      </div>

                    </div>
                    <div class="col-12 col-md">

                      
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input class="custom-control-input" id="loginRemember" type="checkbox"/>
                          <label class="custom-control-label" for="loginRemember">
                            Remember me
                          </label>
                        </div>
                      </div>

                    </div>
                    <div class="col-12 col-md-auto">

                      
                      <div class="form-group">
                        <a class="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot Password?</a>
                      </div>

                    </div>
                    <div class="col-12">

                    
                      <button class="btn btn-sm btn-dark" type="submit">
                        Sign In
                      </button>

                    </div>
                  </div>
                </form>
                <br/>
<div >New To Excwha? <Link to={redirect === '/' ? 'register' : 'register?redirect=' + redirect }>Register</Link> </div>

              </div>
            </div>

          </div>
          <div class="col-12 col-md-6">

         <h1 classNamae="pt-3">Welcome Back</h1>

          </div>
        </div>
      </div>
    </section>

 </React.Fragment>
)
}

export default SignInComponent;