import React, { Component,useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NewNavBar from './newNavBar';
import NewFooter from './newFooter';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';



function RegisterComponent(props){

   const [name, setname] = useState('');
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
   const [rePassword, setrePassword] = useState('');

   const userRegister = useSelector(state => state.userRegister);
   const {loading,userInfo,error} = userRegister;

   const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

   const dispatch = useDispatch();

   const handleRegister = (e) => {
      e.preventDefault(e);
      dispatch(register(name,email,password));
   };

   useEffect(() => {
      if(userInfo){
         props.history.push(redirect);
      }
      return () => {
         //
      }
   }, [userInfo]);

return (
   <React.Fragment>
      <NewNavBar/>

      
<section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

           
          <div className="card card-lg">
<div className="card-body">

 
  <h6 className="mb-7">New Customer</h6>

  <li>
                     {loading && <div>Loading ...</div>}
                     {error && <div> {error} </div>}
                    </li>

  <form onSubmit={handleRegister}>
    <div className="row">
      <div className="col-12">

        
        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            First Name *
          </label>
          <input className="form-control form-control-sm" id="name" name="name" onChange={(e) => setname(e.target.value)} type="text" placeholder="First Name *" required/>
        </div>

      </div>
      <div className="col-12">

        

        
        <div className="form-group">
          <label className="sr-only" htmlFor="registerEmail">
            Email Address *
          </label>
          <input className="form-control form-control-sm" id="email" name="email" onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email Address *" required/>
        </div>

      </div>
      <div className="col-12 col-md-6">

       
        <div className="form-group">
          <label className="sr-only" htmlFor="registerPassword">
            Password *
          </label>
          <input className="form-control form-control-sm" id="password" name="password" onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password *" required/>
        </div>

      </div>
      <div className="col-12 col-md-6">

       
        <div className="form-group">
          <label className="sr-only" htmlFor="registerPasswordConfirm">
            Confirm Password *
          </label>
          <input className="form-control form-control-sm" id="rePassword" name="rePassword" type="password" onChange={(e) => setrePassword(e.target.value)}  placeholder="Confrm Password *"/>
        </div>

      </div>
      <div className="col-12 col-md-auto">

        
        <div className="form-group font-size-sm text-muted">
          By registering your details, you agree with our Terms & Conditions,
          and Privacy and Cookie Policy.
        </div>

      </div>
      <div className="col-12 col-md">

   
     

      </div>
      <div className="col-12">

      
        <button className="btn btn-sm btn-dark" type="submit">
          Register
        </button>

      </div>
    </div>
  </form>
  <br/>
  <div >Already Have An Account? <Link to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect }>Login</Link> </div>
       
</div>
</div>

          </div>
          <div className="col-12 col-md-6">

         <h1 classNamae="pt-3">Welcome Back</h1>

          </div>
        </div>
      </div>
    </section>
   </React.Fragment>
);
}

export default RegisterComponent;