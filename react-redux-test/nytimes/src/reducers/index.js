const reducers = (state = [], action) => {
  switch (action.type) {
	case 'CHANGE_COUNTRY':
        return action.data;
    default:
      return state;
  	}
};

export default reducers;