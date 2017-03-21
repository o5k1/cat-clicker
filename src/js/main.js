var Clicker = function(parentEl, name){
	this.el = null;
	this.parentEl = parentEl;
	this.name = name;
	this.template = $('#clickerTemplate').html();
	this.ui = {
		"name" : null,
		"counter" : null,
		"button" : null
	};
	
	this.render = function () {
		this.el = $(this.template);
		parentEl.append(this.el);
		this.el.attr('id', 'clicker-' + this.name);
		this.ui.name = this.el.find('.clicker__name');
		this.ui.counter = this.el.find('.clicker__counter');
		console.log(this.ui.counter);
		this.ui.button = this.el.find('.clicker__button');
		this.setName(this.name);

		// Events handlers
		this.ui.button.click({that : this}, this.onIncrementButtonClicked);
	}

	this.onIncrementButtonClicked = function(options){
		var that = options.data.that;
		var count = that.ui.counter.html();
		that.ui.counter.html(++count);
	};

	this.setName = function (name) {
		this.ui.name.text(name);
	}
}

$( document ).ready(function(){
	var root = $('#content');

	var clickerFirst = new Clicker(root, 'First');
	clickerFirst.render();
	var clickerSecond = new Clicker(root, 'Second');
	clickerSecond.render();
});

