import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeItem, addTotals, increment, decrement } from '../../actions/productAction'

export class CartItem extends Component {
    render() {
        const {id, title, img, price, total, count} = this.props.item;
        return (
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img 
                        src={img}
                        style={{ width: "5rem", height: "5rem"}} 
                        className="img-fluid"
                        alt="product"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price : </span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span className="btn btn-black mx-1" onClick={() => count == 1 ? (this.props.removeItem(id), this.props.addTotals()) : (this.props.decrement(id), this.props.addTotals())}>
                                -
                            </span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => (
                                this.props.increment(id),
                                this.props.addTotals())}>
                                +
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => (
                        this.props.removeItem(id),
                        this.props.addTotals())}>
                        <i className="fas fa-trash" />
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong> item total : $ {total}</strong>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.allProduct.cart
})

export default connect(mapStateToProps, { removeItem, addTotals, increment, decrement })(CartItem)