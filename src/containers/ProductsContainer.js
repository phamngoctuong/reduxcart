import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index';
class ProductsContainer extends Component {
    showProducts = (products) => {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product 
                        key={product.id} 
                        product={product} 
                        index={index + 1}
                        onAddToCart = {onAddToCart}
                        onChangeMessage={onChangeMessage}
                    >
                    </Product>
                );
            });
        }
        return result;
    };
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired
};
var mapStateToProps = (state) => {
    return {
        products: state.products
    }
};
var mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);