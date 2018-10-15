const Reducer = (state = [], action) => {
  switch (action.type) {
	case 'DECREASE_COUNTER':
		return action.counter;
	case 'INCREASE_COUNTER':
		return action.counter;

    default:
      return state;
  	}
};

export default Reducer;