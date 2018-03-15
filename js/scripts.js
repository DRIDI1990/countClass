// Empty JS for your own code to be here
$(document).ready(function(){
	var allClasses = [];
	var allElements = document.querySelectorAll('*');

	for (var i = 0; i < allElements.length; i++) {
	  var classes = allElements[i].className.toString().split(/\s+/);
	  for (var j = 0; j < classes.length; j++) {
		var cls = classes[j];
		if (cls && allClasses.indexOf(cls) === -1)
		  allClasses.push(cls);
	  }
	}
	for(var i= 0; i < allClasses.length; i++)
	{
		 numItems = $('.'+allClasses[i]).length;
		 console.log('Class '+allClasses[i]+ ' utilisée '+numItems+' fois');
	}
});
	
