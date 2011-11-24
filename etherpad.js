/**
 * Simple repeating script to paste into your browsers console window
 * when joininh an etherpad. It will fill in names for people as soon
 * as they join.
 * 
 * @licence GNU GPL v3+
 * @author Jeroen De Dauw < jeroendedauw@gmail.com >
 */
(function () { 
	var _this = this;
	this.count = 0;
	
	this.getName = function() {
		return "I'm to slow to fill in my name!" + ( this.count === 0 ? '' : this.count );
	};
	
	this.fillInEmpties = function() {
		e = jQuery.Event( "keypress" );
		e.which = 13;
		
		$( '.editempty' ).val( this.getName() ).trigger( e );
		this.count++;
	}
	
	this.doLoop = function() {
		this.fillInEmpties();
		setTimeout( function() { _this.doLoop(); }, 500 );
	};
	
	this.doLoop();
})();