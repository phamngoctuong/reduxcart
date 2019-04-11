import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'http://localhost:3000/img/products/iphone.jpeg',
            description: 'Sản phẩm do Apple sản xuất',
            price: 700,
            inventory: 10,
            rating: 1
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'Iphone 9 Plus',
            image: 'http://localhost:3000/img/products/iphone.jpeg',
            description: 'Sản phẩm do Apple sản xuất',
            price: 900,
            inventory: 5,
            rating: 1
        },
        quantity: 5
    }
];
var initialState = data ? data : [];
var findProductInCart = (cart,product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
};
var cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findProductInCart(state,product);
            if(index !==-1) {
                state[index].quantity += quantity;
            }else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
            break;
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !==-1) {
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
            break;
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !==-1 && quantity >0) {
                state[index].quantity = quantity 
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
            break;
        default:
            return [...state];
            break;
    }
};
export default cart;