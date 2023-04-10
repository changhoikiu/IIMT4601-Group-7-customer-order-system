export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
              const updatedCart = [...state.cart];
              updatedCart[existingItemIndex].qty += 1;
              return { ...state, cart: updatedCart };
            } else {
              return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
            }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
        case "CHANGE_CART_QUANTITY":
            return {...state, cart: state.cart.filter(c=>c.id === action.payload.id?c.qty=action.payload.qty:c.qty)};
        default:
            return state;
    }
}