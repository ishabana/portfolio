(function($){
	/**
	 * Get mouse pointer relative position in percentage
	 * @param  {Object}   event  Mouse event object
	 * @param  {string}   origin can be "topLeft" or "center"
	 * @param  {Function} fn     callback function this function will pass 3 arguments "positionX", "positionY", and currentElementObject
	 * @return {Object}          jQuery object for chainability
	 */
	$.fn.relativeMousePosition = function(event, origin, fn){
		return this.each(function() {
			var widthPx = $(this).outerWidth();
			var heightPx = $(this).outerHeight();
			var offsetTopPx = $(this).offset().top;
			var offsetLeftPx = $(this).offset().left;
			var relativeMousePositionX = (event.pageX - offsetLeftPx) / widthPx * 100;
			var relativeMousePositionY = (event.pageY - offsetTopPx) / heightPx * 100;
			origin == "topLeft" && fn(relativeMousePositionX, relativeMousePositionY, this);
			origin == "center" && fn(relativeMousePositionX - 90, relativeMousePositionY - 10, this);
		});
	};
})(jQuery);