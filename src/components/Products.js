import React, { Component } from 'react';
import Product from './Product';
import {connect} from 'react-redux';
class Products extends Component {
    render() {
        var {products} = this.props;
        var showProducts = (products) => {
            var result = null;
            if(products.length > 0) {
                result = products.map((product, index)=>{
                    return(
                        <Product key={product.id} product={product} index={index + 1}></Product>
                    );
                });
            }
            return result;
        };
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.showProducts(products)}
                </div>
            </section>
        );
    }
}
var mapStateToProps = (state) => {
    return {
        products: state.products
    }
};
export default connect(mapStateToProps, null)(Products);