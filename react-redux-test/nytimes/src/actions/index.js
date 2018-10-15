export function createTodo(text){
  return {
    type: 'CREATE_TODO',
    text
  }
}

export function createPost(data) {

// return function (dispatch) {
//    axios.get(url)
//       		.then(res => {
//         		res.data.list.forEach((item, index) => {
//           			if (index % 8 === 0) {
//             			arr.push({
//               				date: item.dt_txt.split(' ')[0], 
//               				temperature: Math.round(parseFloat(item.main.temp) - 273.15),
//               				humidity: item.main.humidity
//             			});
//           			}
//         		});
//         		data.country = country;
//         		data.current_weather = {
//         			temperature: arr[0].temperature,
//         			humidity: arr[0].humidity
//         		};
//         		data.forecast = [];
//         		data.forecast = arr;

//         		dispatch({
//       		type: 'CHANGE_COUNTRY',
//      	 	data
//     	});


//       	});
//   };

	return {
		type: 'CREATE_POST',
		data
	}
}

export function deletePost(id) {
	return {
		type: 'DELETE_POST',
		id
	}
}

export function editPost(id) {
	return {
		type: 'EDIT_POST',
		id
	}
}

export function update(id, data) {
	return {
		type: 'UPDATE',
		id,
		data
	}
}