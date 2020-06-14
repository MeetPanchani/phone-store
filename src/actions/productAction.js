import { FETCH_PRODUCT, SET_DETAIL_PRODUCT, ADD_TO_CART, OPEN_MODAL, CLOSE_MODAL, ADD_TOTALS, CLEAR_CART, REMOVE_ITEM, INCREMENT, DECREMENT } from './type'
import { storeProducts, detailProduct } from '../data'

export const fetchProduct = () => {
    return (dispatch) => {
       dispatch({
           type: FETCH_PRODUCT,
           payload: JSON.parse(JSON.stringify(storeProducts))
       });
    }
}  

export const setDetailProduct = (id) => {
    return (dispatch) => {
        dispatch({
            type: SET_DETAIL_PRODUCT,
            id: id
        });
    }
}

export const addToCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            id: id
        });
    }
}

export const openModal = (id) => {
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL,
            id: id
        });
    }
}

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: CLOSE_MODAL
        });
    }
}

export const addTotals = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_TOTALS
        });
    }
}

export const clearCart = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART,
        })
    }
}

export const removeItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM,
            id: id
        })
    }
}

export const increment = (id) => {
    return (dispatch) => {
        dispatch({
            type: INCREMENT,
            id: id
        })
    } 
}

export const decrement = (id) => {
    return (dispatch) => {
        dispatch({
            type: DECREMENT,
            id: id
        })
    }
}