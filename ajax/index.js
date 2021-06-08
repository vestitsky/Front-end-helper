const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document
	.querySelector("#click-me")
	.addEventListener("click", makeRequest);

function makeRequest() {
	$.ajax(
		`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`,
		{
			success: function (data) {
				data.forEach((element) => {
					const img = document.createElement("img");
					img.src = element.thumbnail;
					document.querySelector("#result").appendChild(img);
				});
			},
		}
	);
}
