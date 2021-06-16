debugger;
createTask("learn HTML");

function getImages(pageNumber) {
	const promise = axios.get(
		`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`
	);
	return promise.then((response) => {
		return response.data;
	});
}

function getTasks() {
	const promise = axios.get(
		`https://repetitora.net/api/JS/Tasks?widgetId=4242`
	);
	return promise.then((response) => {
		return response.data;
	});
}

function createTask(title) {
	// const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
	// 	widgetId: 4242,
	// 	title: title,
	// });
	// return promise.then((response) => {
	//	return response.data;
	// });
	const promise = axios({
		method: "post",
		url: "https://repetitora.net/api/JS/Tasks",
		data: {
			widgetId: 4242,
			title: title,
		},
	});
	return promise.then((response) => {
		return response.data;
	});
}

function updateTasks() {
	const promise = axios.put(
		`https://repetitora.net/api/JS/Tasks?widgetId=4242`
	);
	return promise.then((response) => {
		return response.data;
	});
}

function deleteTasks(id) {
	const promise = axios.delete(
		`https://repetitora.net/api/JS/Tasks?widgetId=4242&widgetId=4242&taskId=${id}`
	);
	return promise.then((response) => {
		return response.data;
	});
}
