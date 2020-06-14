import { FETCH_PRODUCT, SET_DETAIL_PRODUCT, ADD_TO_CART, OPEN_MODAL, CLOSE_MODAL, ADD_TOTALS, CLEAR_CART, REMOVE_ITEM, INCREMENT, DECREMENT } from '../actions/type';
import { detailProduct } from '../data';

const initialStates = {
    products : [],
    detailProduct : '',
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}

export default function(state = initialStates, action) {
    switch(action.type) { 
                   
        case FETCH_PRODUCT:
            console.log(action.payload);
            return{
                ...state,
                products: action.payload,
            }
        case SET_DETAIL_PRODUCT:
            const tempProduct = state.products.filter((product) => product.id == action.id)[0];
            return{
                ...state,
                detailProduct: tempProduct
            }
        case ADD_TO_CART:
            const allProducts = [...state.products];
            const product = allProducts.filter((product) => product.id == action.id )[0];
            product.inCart =  true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            
            return {
                ...state,
                products: allProducts,
                cart: [...state.cart, product]
            }
        case OPEN_MODAL:
            const tempModelProduct = state.products.filter((product) => product.id == action.id )[0];
            return {
                ...state,
                modalProduct: tempModelProduct,
                modalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalOpen: false
            }
        case ADD_TOTALS:
            let subTotal = 0;
            state.cart.map((item) => subTotal += item.total);
            const tempTax = subTotal * 0.1;
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax;
            return{
                ...state,
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        case CLEAR_CART:
            const tempProducts = state.products.map(item => (
                { ...item, inCart:false, total: 0, count: 0}
            ))
            console.log(tempProducts);
            return{
                ...state,
                cart: [],
                products: tempProducts
            }
        case REMOVE_ITEM:
            let tempCartProducts = [...state.products];
            let tempCart = [...state.cart];
            tempCart = tempCart.filter(item => item.id !== action.id);
            let removeProduct = tempCartProducts.filter(item => item.id == action.id)[0];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
            return {
                ...state,
                cart: tempCart,
                products: tempCartProducts
            }
        case INCREMENT: 
            let tempInCart = [...state.cart]
            const productIn = tempInCart.filter(item => item.id == action.id)[0];
            productIn.count = productIn.count + 1;
            productIn.total = productIn.count * productIn.price;
            return {
                ...state,
                cart: [...tempInCart]
            }
        case DECREMENT:
            let tempDecCart = [...state.cart];
            const productDec = tempDecCart.filter(item => item.id == action.id)[0];
            productDec.count = productDec.count - 1;
            productDec.total = productDec.count * productDec.price;
            return {
                ...state,
                cart: [...tempDecCart]
            }
        default:
            return state
    }
}