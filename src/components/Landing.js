import React, { Component } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import { fetchProduct } from '../actions/productAction'
import Product from './Product'

export class Landing extends Component {
    componentDidMount() {
        this.props.fetchProduct();
    }

    render() {
        const products = this.props.products; 
        let content = '';

        content = products.map((product) => <Product key={product.id} product={product} />) ;
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            {content}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.allProduct.products
})

export default connect(mapStateToProps, { fetchProduct })(Landing)