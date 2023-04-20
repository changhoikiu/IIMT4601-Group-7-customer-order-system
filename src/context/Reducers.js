export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItemIndex = state.cart.findIndex(
          (item) => item.Book_id === action.payload.Book_id
        );
        if (existingItemIndex >= 0) {
          return { ...state, cart: [...state.cart] };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, qty: 1 }],
          };
        }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.Book_id !== action.payload.Book_id),
        };
      case "CHANGE_CART_QUANTITY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.Book_id === action.payload.Book_id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      case "CLEAR_CART":
        return { ...state, cart: [] };
      case "FETCH_BOOKS_SUCCESS":
        return { ...state, bookList: action.payload };
      default:
        return state;
    }
}