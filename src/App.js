import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Products from './components/Products';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer></ProductsContainer>
                        <Message></Message>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default App;