import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({id, img, title, price, amount}) => {
    const {remove, increase, decrease, toggleAmount} = useGlobalContext();
    return(
        <div>
            <article className="cart-item">
                <img src={img} alt={title}></img>
                <div>
                    <h4>{title}</h4>
                    <h4 className="item-price">${price}</h4>
                    <button className="remove-btn" onClick={() => remove(id)}>Remove</button>
                </div>
                <div style={{display:"flex"}}></div>
                <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
                    <p style={{fontSize: "20PX"}}>-</p>
                </button>

                <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
                    <p style={{fontSize: "20PX"}}>+</p>
                </button>
            </article>
        </div>
    )
}

export default CartItem;