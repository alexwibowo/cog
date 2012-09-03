Namespace("org.cog.web");

org.cog.web.MainPage = function () {
	this.highlightMenu = $("ul","#highlights-menu");
	this._initializeHighlightArticles();
};

org.cog.web.MainPage.prototype._initializeHighlightArticles = function (){
	this.highlightMenu.find('li').each(function(index, item){
		$(item).click(function(){
			// find currently selected			
			var currentlySelected = $(this).parent().find('.selected');
			$("#"+currentlySelected[0].id).removeClass('selected');
			$("#"+currentlySelected[0].id+"-content").removeClass('selected');			
			
			// remove
			$(this).addClass('selected');
			$("#"+this.id+"-content").addClass('selected');
		});
	});
};



new org.cog.web.MainPage();