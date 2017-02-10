$(document).ready(function() {
	console.log("I AM GETTING READY TO START");

	function sendDataToMooshimeterApp(url, textData) {
		//invoke url to open moohshimeterapp
		//url should be mooshimeterapp://
		//should be called with textData and url
		// window.open(url + textData);
		window.location = url + textData;

		console.log("hello");
	}

	$("#open-mooshimeter").click(function() {
		sendDataToMooshimeterApp("mooshimeter://", "somedata")
	});
});