import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPINGADDRESS } from "../constants/cartConstants";


export const addToCart=(productId,qty)=>async(dispatch,getState)=>{

    const {data}=await Axios.get(`/api/products/${productId}`);
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty,
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const removefromcart=(productid)=>(dispatch,getState)=>{

    dispatch({type:CART_REMOVE_ITEM,payload:productid});
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));

}

export const saveShippingAddress=(data)=>(dispatch)=>{

    dispatch({
        type:CART_SAVE_SHIPPINGADDRESS,
        payload:data
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))

}

export const savepaymentMethod=(data)=>(dispatch)=>{

    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data
    })

}