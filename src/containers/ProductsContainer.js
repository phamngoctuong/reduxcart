import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../reducers/products';
class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
           <Products products={products}></Products>
        );
    }
}
var mapStateToProps = (state) => {
    return {
        products: state.products
    }
};
export default connect(mapStateToProps, null)(ProductsContainer);