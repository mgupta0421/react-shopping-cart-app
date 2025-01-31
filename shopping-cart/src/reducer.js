
const reducer = (state, action) => {
    if(action.type === 'clear'){
        return {...state, cart:[]};
    }else if(action.type === 'remove'){
        return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)}
    }else if(action.type === 'increase'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, action:cartItem +1}
            }
            return cartItem;
        });
        return {...state, cart:tempCart}
    }else if(action.type === 'decrease'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return {...cartItem, action:cartItem - 1}
            }
            return cartItem;
        }).filter((cartItem) => cartItem !== 0);
        return {...state, cart:tempCart}
    }

    return state;
}

export default reducer;