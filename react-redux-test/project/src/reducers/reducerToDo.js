const reducerToDo = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
    	return state.concat([action.text]);
    default:
      return state;
  	}
};

export default reducerToDo;