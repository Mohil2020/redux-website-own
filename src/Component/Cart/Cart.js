// Cart component
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart,deleteData } from '../CartSlice/CartSlice';

function Cart() {
    const addCart = useSelector((state) => state.counter.cartItems);
    const cart = useSelector((state) => state.counter.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${addCart}`)
            .then(function (response) {
                console.log(dispatch(addtoCart(response.data)));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <div>
            {cart.map((ele, index) => {
                return (
                    <div key={index}>
                        <p>{ele.title} <button onClick={()=>{dispatch(deleteData(index))}}>delete</button></p>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;
