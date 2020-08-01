import React, { Component,useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NewNavBar from './newNavBar';
import NewFooter from './newFooter';
import {Link} from 'react-router-dom';
import { saveShipping } from '../actions/cartActions';
import CheckOutSteps from './checkOutSteps';



function ShippingComponent(props){

   const [city, setcity] = useState('');
   const [address, setaddress] = useState('');
   const [postalcode, setpostalcode] = useState('');
   const [country, setcountry] = useState('');

   const dispatch = useDispatch();

   const handleShipping = (e) => {
      e.preventDefault(e);
      dispatch(saveShipping({city,address,postalcode,country}));
      props.history.push('/payment')
   };

return (
   <React.Fragment>
      <NewNavBar/>
<CheckOutSteps step1 step2 ></CheckOutSteps>
      
<section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

           
          <div className="card card-lg">
<div className="card-body">

 
  <h6 className="mb-7">Shipping</h6>



  <form onSubmit={handleShipping}>
    <div className="row">
      <div className="col-12">

     
        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            Addrress *
          </label>
          <input className="form-control form-control-sm" id="address" name="address" onChange={(e) => setaddress(e.target.value)} type="text" placeholder="Addrress *" required/>
        </div>


        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            City *
          </label>
          <input className="form-control form-control-sm" id="city" name="city" onChange={(e) => setcity(e.target.value)} type="text" placeholder="City *" required/>
        </div>

        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            Postal Code *
          </label>
          <input className="form-control form-control-sm" id="postalcode" name="postalcode" onChange={(e) => setpostalcode(e.target.value)} type="text" placeholder="Postal Code *" required/>
        </div>


        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            Country *
          </label>
          <input className="form-control form-control-sm" id="country" name="country" onChange={(e) => setcountry(e.target.value)} type="text" placeholder="Country *" required/>
        </div>

      </div>
    

    

   
      <div className="col-12">

      
        <button className="btn btn-sm btn-dark" type="submit">
          Continue ...
        </button>

      </div>
    </div>
  </form>
  <br/>
  
</div>
</div>

          </div>
       
        </div>
      </div>
    </section>
   </React.Fragment>
);
}

export default ShippingComponent;