// Requires jQuery to call the simplified AJAX method ($.ajax)

function handleBeforeSend(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleBeforeSend");
}

function handleSuccess(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleSuccess");
	console.log("Data returned: ", XMLHttpRequest);

	if(XMLHttpRequest['error'] != undefined) {
		alert("Error: " + XMLHttpRequest['error']);
		return;
	}

	console.log("Message: ", XMLHttpRequest['message']);
}

function handleError(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleError");
}

function handleComplete(XMLHttpRequest, textStatus, errorThrown) {
	console.log("In handleComplete");
}

function handleClick(ev) {
	console.log("In handleClick");
	console.log("Called by event :", ev.type);

	var demo_id = parseInt(Math.floor(Math.random()*1000));

	console.log("demo_id = " + demo_id);
	
	// Set up settings for the request
	var settings = {
		url       : 'demo.php',
		data      : 'id=' + demo_id,
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

$(document).ready(sessionLoad);
