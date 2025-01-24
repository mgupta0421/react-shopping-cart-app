import React from "react"
import bag from './media/icons/bag.svg';

const NavBar = () => {
    return (
        <nav> 
            <div className="nav-center">
                <h3>HotDeals</h3>
                <div classname = "nav-container">
                    <img src = {bag} alt="bag"></img>
                    <div className="amount-container">
                        <p className="total-amount">5</p>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar


