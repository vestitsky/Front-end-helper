doItAfter(4)
	.then(() => console.log("hey"))
	.then(() => console.log("heyhey"));

function doItAfter(seconds) {
	let promise = new Promise((resolve, reject) => {
		var a = 5 + 5;
		console.log(a);
		setTimeout(() => {
			resolve();
		}, seconds * 1000);
	});
	return promise;
}
