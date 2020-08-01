import React, { Component,useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NewNavBar from './newNavBar';
import NewFooter from './newFooter';
import {Link} from 'react-router-dom';
import { savePayment } from '../actions/cartActions';
import CheckOutSteps from './checkOutSteps';



function PaymentComponent(props){

const [paymentMethod, setpaymentMethod] = useState('');

   const dispatch = useDispatch();

   const handleShipping = (e) => {
      e.preventDefault(e);
      dispatch(savePayment({paymentMethod}));
      props.history.push('/placeorder')
   };

return (
   <React.Fragment>
      <NewNavBar/>
<CheckOutSteps step1 step2 step3 ></CheckOutSteps>
      
<section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

           
          <div className="card card-lg">
<div className="card-body">

 
  <h6 className="mb-7">Payment</h6>



  <form onSubmit={handleShipping}>
    <div className="row">
      <div className="col-12">

        <div className="form-group">
          <label className="sr-only" htmlFor="registerFirstName">
            Country *
          </label>
          <input  className="form-control form-control-sm" id="paymentMethod" name="paymentMethod" onChange={(e) => setpaymentMethod(e.target.value)} type="radio" value="PayPal" required/>
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

export default PaymentComponent;