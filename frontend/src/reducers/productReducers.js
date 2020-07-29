import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

function productListReducer(state = {products: []},action) {
   switch (action.type) {
      case PRODUCT_LIST_REQUEST:
         return {loading:true};
      
      case PRODUCT_LIST_SUCCESS:
         return {loading:false,products: action.payload };   
      case PRODUCT_LIST_FAIL:
         return {loading:false,error:action.payload};
      default:
        return state;
   }
   
}

function productDetailsReducer(state = {product: {}},action) {
   switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
         return {loading:true};
      
      case PRODUCT_DETAILS_SUCCESS:
         return {loading:false,product: action.payload };   
      case PRODUCT_DETAILS_FAIL:
         return {loading:false,error:action.payload};
      default:
        return state;
   }
   
}

export {productListReducer,productDetailsReducer};

// simple analogy, if you request, it loads from the DB, on success it should stop loading and return payload, 
//on failure it shoould also stop loading and return error payload