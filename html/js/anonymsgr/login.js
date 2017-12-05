$(document).ready(function() {

	var shaObj = new jsSHA("SHA-512", "TEXT");

	$('#password').on('focus',function() {
		$('#password').initKeypad();
	});

	$('#login').on('focus',function() {
		$('#jQKeyboardContainer').remove();
	});

});