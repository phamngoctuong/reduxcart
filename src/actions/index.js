import * as types './../constants/ActionType';
export const actAddToCart = (product,quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}