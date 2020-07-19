import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../models/cartItem';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const addedProduct = action.product;
    const { price: prodPrice, title: prodTitle, id } = addedProduct;
    let updatedOrNewCartItem;

    if (state.items[id]) {
      // already have the item in the cart
      updatedOrNewCartItem = new CartItem(
        state.items[id].quantity + 1,
        prodPrice,
        prodTitle,
        state.items[id].sum + prodPrice,
      );
    } else {
      updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
    }
    console.log(updatedOrNewCartItem);
    return {
      ...state,
      items: { ...state.items, [id]: updatedOrNewCartItem },
      totalAmount: state.totalAmount + prodPrice,
    };
  }

  return state;
};
