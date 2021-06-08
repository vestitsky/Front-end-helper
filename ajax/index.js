const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document
	.querySelector("#click-me")
	.addEventListener("click", () => {
		const promise = getImages(pageNumberEl.value);
		promise.then(onDataRecieved);
	});

function onDataRecieved(array) {
	array.forEach((element) => {
		const img = document.createElement("img");
		img.src = element.thumbnail;
		document.querySelector("#result").appendChild(img);
	});
}
