import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer,productDetailsReducer, productSaveReducer, productDeleteReducer,} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userSignInReducer, userRegisterReducer } from './reducers/userreducers';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart : {cartItems,shipping:{},payment:{}}};
const reducer = combineReducers({
   productList:productListReducer,
   productDetails: productDetailsReducer,
   cart: cartReducer,
   userSignin: userSignInReducer,
   userRegister: userRegisterReducer,
   productSave : productSaveReducer,
   productDelete: productDeleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;