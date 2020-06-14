import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTotals, clearCart } from '../../actions/productAction'
import { ButtonContainer } from '../Button'

export class CartTotals extends Component {
    componentDidMount() {
        this.props.addTotals();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <Link to='/'>
                                <button 
                                    className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                    type="button"
                                    onClick={() => 
                                    this.props.clearCart(),
                                    this.props.addTotals()}>
                                        clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">subtotal :</span>
                                <strong>$ {this.props.cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">tax :</span>
                                <strong>$ {this.props.cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">total :</span>
                                <strong>$ {this.props.cartTotal}</strong>
                            </h5>
                            <ButtonContainer>CheckOut</ButtonContainer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    cartSubTotal: state.allProduct.cartSubTotal,
    cartTax: state.allProduct.cartTax,
    cartTotal: state.allProduct.cartTotal
})

export default connect(mapStateToProps, { addTotals, clearCart })(CartTotals)
