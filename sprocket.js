function handleBeforeSend(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleBeforeSend");
}

function handleSuccess(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleSuccess");
}

function handleError(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleError");
}

function handleComplete(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleComplete");
}

function handleClick() {
	console.log("In handleClick");
	
	// Set up settings for the request
	var settings = {
		url       : 'demo.php',
		type      : 'GET',
		cache     : false,
		dataType  : 'json',
		beforeSend: handleBeforeSend,
		success   : handleSuccess,
		error     : handleError,
		complete  : handleComplete
	};

	$.ajax(settings);

}

function installHandlers() {
	console.log("In installHandlers");

	$('#button').bind('click', handleClick);
}

function sessionLoad() {
	console.log("In sessionLoad");
	installHandlers();
}

$(document).ready(sessioLoad);
