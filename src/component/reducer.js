export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      Item: state.Item.filter((currItem) => {
        return currItem.id != action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      Item: [],
    };
  }

  if (action.type === "INCREASE") {
    let updatedCart = state.Item.map((currItem) => {
      if (currItem.id === action.payload) {
        return {
          ...currItem,
          quantity: currItem.quantity + 1,
        };
      }
      return currItem;
    });
    return {
      ...state,
      Item: updatedCart,
    };
  }
  return state;
};
