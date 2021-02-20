function doStuff()
{
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var comments = document.getElementById('comments').value;
	var nameResult = document.getElementById('nameResult');
	var commentResult = document.getElementById('commentResult');
	
	
}

function init()
{
	document.getElementById('submitButton').onclick = doStuff;
}

window.onload = init;