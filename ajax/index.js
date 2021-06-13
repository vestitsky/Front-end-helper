const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document
	.querySelector("#click-me")
	.addEventListener("click", () => {
		const promise = getImages(pageNumberEl.value);
		promise.then(onImagesRecieved);
	});
const getTaskButton = document
	.querySelector("#get-tasks")
	.addEventListener("click", () => {
		const promise = getTasks();
		promise.then(onTasksReceived);
	});

function onImagesRecieved(array) {
	array.forEach((element) => {
		const img = document.createElement("img");
		img.src = element.thumbnail;
		document.querySelector("#result").appendChild(img);
	});
}

function onTasksReceived(array) {
	array.forEach((element) => {
		const li = document.createElement("li");
		li.innerHTML = element.title;
		document.querySelector("#tasks-result").appendChild(li);
	});
}

createTask("helloooaaa");
