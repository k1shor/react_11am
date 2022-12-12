export const cartReducer = (state = {cart_items: []}, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return {cart_items: [...state.cart_items, action.payload]}

        case "REMOVE_FROM_CART":
            return {cart_items: [...state.cart_items.filter(item=> item.id !== action.payload.id)]}
        default: 
            return state
    }
}