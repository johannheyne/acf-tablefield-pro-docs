jQuery.noConflict();
jQuery( document ).ready( function( $ ) {

	$( 'body' )

		.delegate( '.pre-title', 'click', function() {

			var that = $( this );

				that.toggle( 'closed' );
		} );

});
