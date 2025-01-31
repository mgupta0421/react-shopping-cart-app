import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";
import reducer from "./reducer";

const CartContainer = () => {
    const { cart, amount,} = useGlobalContext();
    if(cart.length === 0){
        return (
            <header>
                <h2> Your Wishlist</h2>
                <h4 className="empty-cart"> Cart is currently empty</h4>
            </header>
        )
    }
    return(
        <section className="cart">
            <header>
                <h2>Your Wishlist</h2>
                <div>
                    {cart.map((item) => {
                        return <CartItem key= {item.id} {...item} />
                    })}   
                </div>
                <footer>
                    <hr/>
                    <div className="cart-total">
                        <h4>Total <span>{amount}</span></h4>
                    </div>
                    <button className="btn clear-btn" onClick={() => console.log('clear cart')}>Clear Cart
                    </button>
                </footer>
            </header>
        </section>
    )
}

export default CartContainer;