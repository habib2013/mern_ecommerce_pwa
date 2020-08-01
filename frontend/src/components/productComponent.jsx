import React, { Component,useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NewNavBar from './newNavBar';
import NewFooter from './newFooter';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';
 

function ProductComponent(props){
const dispatch = useDispatch();
const [modalVisible, setmodalVisible] = useState(false);
const [id, setid] = useState('');
const [name, setName] = useState('');
const [price, setprice] = useState('');
const [image, setImage] = useState('');
const [brand, setbrand] = useState('');
const [category, setcategory] = useState('');
const [numberInsStock, setnumberInsStock] = useState('');
const [description, setdescription] = useState('');


const productSave = useSelector(state => state.productSave);
const productDelete = useSelector(state => state.productDelete);
const productList = useSelector(state => state.productList);
const {loading,error,products} = productList;
const {loading:loadingSave,success: successSave,error: errorSave} = productSave;
const {loading:loadingDelete,success: successDelete,error: errorDelete} = productDelete;

useEffect(() => {
  if (successSave) {
    setmodalVisible(false);
  }
    dispatch(listProducts());
   return () => {
      //
   }
}, [successSave,successDelete]);
var divThirdStyle = {
   maxHeight: '250px',
 }

const openModal = (product) => {
  setmodalVisible(true);;
setid(product._id);
setName(product.name);
setprice(product.price);
setImage(product.image);
setbrand(product.brand);
setcategory(product.category);
setnumberInsStock(product.numberInsStock);
setdescription(product.description);

}

const submithandler = (e) => {
e.preventDefault();
dispatch(saveProduct({_id:id,name,price,image,brand,category,
  numberInsStock,description}));
} 

const handleDelete = (product) => {
  dispatch(deleteProduct(product._id));
}

return (
   
 <React.Fragment>
<NewNavBar/>
<div className="container content-margined">
  <div className="product-header">
 
    <button className="btn btn-info" onClick={() => openModal({})}>Create Product + </button>
  </div>
    <br/>
   
    
<div className="table-responsive">
  <table className="table table-bordered table-sm table-hover mb-0">
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>PRICE</th>
        <th>CATEGORY</th>
        <th>BRAND</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product =>       
    <tr>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td>{product.brand}</td>
        <td>
          <button className="btn btn-info mr-3" onClick={() => openModal(product)}>EDIT</button>
          <button className="btn btn-danger" onClick={() => handleDelete(product)}>DELETE</button>
        </td>
      </tr>
        )}
    </tbody>
  </table>
</div>

</div>

{modalVisible && 
  <section className="py-12">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">

           
            <div className="card card-lg mb-10 mb-md-0">
              <div className="card-body">

               
                <h6 className="mb-7">Create Product</h6>
                    <li>
                     {loadingSave && <div>Loading ...</div>}
                     {errorSave && <div> {errorSave} </div>}
                    </li>

                <form onSubmit={submithandler}>
                  <div className="row">
                    <div className="col-12">

                      
                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product Name*
                        </label>
                        <input placeholder="Product Name" className="form-control form-control-sm" id="name" value={name} name="name" type="text" onChange={(e) => setName(e.target.value)}  required/>
                      </div>

                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product Price*
                        </label>
                        <input placeholder=" Product Price" className="form-control form-control-sm" id="price" value={price} name="price" type="text" onChange={(e) => setprice(e.target.value)}  required/>
                      </div>   

                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product Image*
                        </label>
                        <input placeholder="Product Image" className="form-control form-control-sm" id="image" value={image} name="image" type="text" onChange={(e) => setImage(e.target.value)}  required/>
                      </div>

                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product Brand*
                        </label>
                        <input placeholder="Product Brand" className="form-control form-control-sm" value={brand} id="brand" name="brand" type="text" onChange={(e) => setbrand(e.target.value)}  required/>
                      </div>

                  

                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product category*
                        </label>
                        <input placeholder="Product category" className="form-control form-control-sm" id="category" value={category} name="category" type="text" onChange={(e) => setcategory(e.target.value)}  required/>
                      </div>

                   
                 
                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Number In Stock*
                        </label>
                        <input placeholder="Product Stock" className="form-control form-control-sm" id="numberInsStock" value={numberInsStock} name="numberInsStock" type="text" onChange={(e) => setnumberInsStock(e.target.value)}  required/>
                      </div>



                    
                                    

                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                         Product Description*
                        </label>
<textarea  className="form-control form-control-sm" id="description" name="description" type="text" onChange={(e) => setdescription(e.target.value)}  required value={description}></textarea>
                      </div>

                    </div>
                
                    <div className="col-12 col-md">

                     

                    </div>
                    <div className="col-12 col-md-auto">

                      
                   

                    </div>
                    <div className="col-12">

                    
                      <button className="btn btn-sm btn-dark mr-3" type="submit">
                      {id ? 'Update Product' : 'Add Product'}
                      </button>
                      <button className="btn btn-sm btn-dark" onClick={() => setmodalVisible(false)} type="submit">
                    Back
                      </button>
                    </div>
                  </div>
                </form>
                <br/>


              </div>
            </div>

          </div>
          <div className="col-12 col-md-6">

         <h1 classNamae="pt-3">Welcome Back</h1>

          </div>
        </div>
      </div>
    </section>

}


 </React.Fragment>
)
}

export default ProductComponent;