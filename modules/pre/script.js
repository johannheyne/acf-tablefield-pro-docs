jQuery.noConflict();
jQuery( document ).ready( function( $ ) {

	$( 'body' )

		.delegate( '.pre-title', 'click', function() {

			var that = $( this ),
				btn = that.find( '.fa' ),
				code = that.next();

				btn.toogle();
				code.toogle();
		} )

		.find( '.fa-angle-down' )
			.toogle();

});
