import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
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
                        <MessageContainer></MessageContainer>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default App;