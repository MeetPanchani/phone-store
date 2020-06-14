import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import { connect } from 'react-redux'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'

export class Cart extends Component {
    render() {
        let cartInfo = (
            <React.Fragment>
                <Title name="your" title="cart" /> 
                <CartColumns />
                <CartList cart={this.props.cart}/>
                <CartTotals history={this.props.history}/>
            </React.Fragment>
        );

        let cartContent = this.props.cart.length > 0 ? cartInfo : <EmptyCart />;
        return (
            <section>
                {cartContent}
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.allProduct.cart
})

export default connect(mapStateToProps)(Cart)