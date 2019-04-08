import * as types from '../constants/ActionType';
var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 700,
        inventory: 10
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 800,
        inventory: 5
    },
    {
        id: 3,
        name: 'Iphone 9 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 900,
        inventory: 20
    }
];
var product = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
};
export default product;