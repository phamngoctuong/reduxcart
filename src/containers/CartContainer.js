import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import PropTypes from 'prop-types';
class CartContainer extends Component {
    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={item.product.id} item={item} index={index}></CartItem>
                )
            });
        }
        return result;
    };
    showTotalAmount = (cart) => {
        var result = null;
            if(cart.length > 0) {
                result = <CartResult cart={cart}></CartResult>
            }
        return result;
    };
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
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