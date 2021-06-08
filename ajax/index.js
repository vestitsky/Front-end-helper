const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document
	.querySelector("#click-me")
	.addEventListener("click", () => {
		getImages(pageNumberEl.value, onDataRecieved);
	});

function onDataRecieved(data) {
	data.forEach((element) => {
		const img = document.createElement("img");
		img.src = element.thumbnail;
		document.querySelector("#result").appendChild(img);
	});
}
