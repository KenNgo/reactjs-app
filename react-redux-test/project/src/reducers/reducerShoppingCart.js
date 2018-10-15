const reducerShoppingCart = (state = [], action) => {
  switch (action.type) {
	case 'ADD_ITEM':
		return state.concat([action.data]);
	case 'DELETE_ITEM':
		return state.filter((cart) => cart.id !== action.id);
    default:
      return state;
  	}
};

export default reducerShoppingCart;