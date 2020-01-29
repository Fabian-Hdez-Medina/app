//jquery-3.4.1
$(function () {
	// body...
	$('#Fabian').searchable({
		striped:true,
		oddRow: {'background-color':'orange'},
		evenRow:{'background-color':'green'},
		searchType:'fuzzy'

	});

});