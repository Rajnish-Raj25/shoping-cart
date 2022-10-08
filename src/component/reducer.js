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

  if (action.type === "INCREASE_ITEM") {
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
  if (action.type === "DECREASE_ITEM") {
    let updatedCart = state.Item.map((currItem) => {
      if (currItem.id === action.payload) {
        return {
          ...currItem,
          quantity: currItem.quantity - 1,
        };
      }
      return currItem;
    }).filter((currItem) => {
      return currItem.quantity !== 0;
    });
    return {
      ...state,
      Item: updatedCart,
    };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.Item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedtotalAmount = price * quantity;
        accum.totalAmount += updatedtotalAmount;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }

  return state;
};
