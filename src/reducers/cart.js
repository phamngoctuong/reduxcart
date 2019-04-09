import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('CART'));
var data = [
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
    }
];
var initialState = data ? data : [];
var cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
            break;
        default:
            return [...state];
            break;
    }
};
export default cart;