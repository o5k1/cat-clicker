$( document ).ready(function(){
	var incrementButton = $('#increment-button');
	var clickCounter = $('#click-counter');

	var onIncrementButtonClicked = function(){
		var count = clickCounter.html();
		clickCounter.html(++count);
	};

	incrementButton.click(onIncrementButtonClicked);
});

