import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as Message from './../constants/Message';
import PropTypes from 'prop-types';
class CartContainer extends Component {
    showCartItem = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={item.product.id} item={item} index={index}></CartItem>
                )
            });
        }
        return result;
    }
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
        );
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}
var mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};
export default connect(mapStateToProps, null)(CartContainer);