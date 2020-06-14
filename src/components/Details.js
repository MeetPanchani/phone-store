import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import { setDetailProduct, addToCart, openModal } from '../actions/productAction'

export class Details extends Component {

    componentDidMount() {
        this.props.setDetailProduct(this.props.match.params.id);
    }

    render() {
        const productId = this.props.match.params.id;
        
        const {id, company, title, img, inCart, info, price} = this.props.products.filter((product) => product.id == productId)[0];
        return (
            <React.Fragment>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="product" /> 
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model : {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by : <span className="text-uppercase">{company}</span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    price : <span>$</span>
                                    {price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product : 
                            </p>
                            <p className="text-muted lead">{info}</p>
                            <div>
                              <Link to='/'>
                                <ButtonContainer>back to products</ButtonContainer>
                              </Link>  
                              <ButtonContainer 
                                cart 
                                disabled={inCart ? true : false} 
                                onClick={() => {
                                    this.props.addToCart(id);
                                    this.props.openModal(id);
                                    }}>
                                  {inCart ? "inCart" : "add to cart"}
                              </ButtonContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.allProduct.products,
    detailProduct: state.allProduct.detailProduct
})

export default connect(mapStateToProps, { setDetailProduct, addToCart, openModal })(Details)
