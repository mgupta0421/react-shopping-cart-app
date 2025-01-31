import React from "react"
import bag from './media/icons/bag.svg';
import { useGlobalContext } from "./context";



const NavBar = () => {
    const {amount} = useGlobalContext();
    return (
        <nav> 
            <div className="nav-center">
                <h3>HotDeals</h3>
                <div classname = "nav-container">
                    <img src = {bag} alt="bag"></img>
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar


