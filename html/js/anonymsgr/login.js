$(document).ready(function() {

	var shaObj = new jsSHA("SHA-512", "TEXT");
	var raw = "";

	$('#login').on('keypress',function() {
		raw = raw+$(this).val()[$(this).val().length];
		console.log(raw);
		shaObj.update(raw);
		var hash = shaObj.getHash("HEX");
		$(this).val(hash);
	});
	
});