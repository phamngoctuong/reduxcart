import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
var appReducers = combineReducers({
    products,
    cart
});
export default appReducers;