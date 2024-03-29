---
title: Overlay
layout: module
group: extends
slug: overlay
version: latest

contentblocks: [

	{
		"blocktype": "html",
		"content": "This module gives the possibilities to open and assign content to an default overlay with dynamic content. It comes also with the possibility to use an individual overlay of the dom."
	},

	{
		"blocktype": "heading",
		"text": "Open an overlay",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "An event to open an overlay can be defined with the class `.acf-table-pro-btn-overlay`. This opens and empty overlay to which content can be defined."
	},




	{
		"blocktype": "heading",
		"text": "Assigning Content",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "Content can assigned to the overlay event by the `data-overlay-id=\"\"` attribute and some content defining methodes using this id."
	},

	{
		"blocktype": "codeblock",
		"lang": "HTML",
		"style": "html",
		"code": "<button class=\"acf-table-pro-overlay-btn-open\" data-overlay-id=\"footer-cell-options\">show footer cell options</button>",
	},

	{
		"blocktype": "heading",
		"text": "Parameters",
		"level": 3,
	},

	{
		"blocktype": "parameters",
		"data": [
			{
				"name": 'data-overlay-id=""',
				"type": "string",
				"description": "The overlay-id is used to assign content to that overlay by serveral methodes.

				",
			},
		],
	},

	{
		"blocktype": "heading",
		"text": "Basic Overlay´s",
		"level": 3,
	},

	{
		"blocktype": "html",
		"content": "The module \"Overlay\" stores all overlay ID´s which have assigned tabs or content in `ACFTableFieldPro.overlay.state.overlays`. At least there should stored the following overlay ID´s…"
	},

	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.state.overlays = [
			\n	'table',
			\n	'top_cell',
			\n	'body_row',
			\n	'body_cell',
			\n	'tfoot_row',
			\n	'tfoot_cell',
			\n	'thead_row',
			\n	'thead_cell'
			\n];
		",
	},




	{
		"blocktype": "heading",
		"text": "Add field settings",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "You can add checkbox options to the table field settings for enabling/disabling overlay content."
	},

	{
		"blocktype": "html",
		"content": "In the field settings, there are checkbox groups for each overlay type to enable/disable contents in that overlay type. You can add checkboxes for defined overlay fields, fieldgroups, tabs or content in a module PHP-Class."
	},

	{
		"blocktype": "codeblock",
		"lang": "PHP (module class)",
		"style": "php",
		"code": "function init() {
			\n
			\n	add_filter( $GLOBALS['acf_tablefield_pro']->id . '/field_settings_end', array( $this, 'filter_field_settings' ), 10, 1 );
			\n	add_filter( $GLOBALS['acf_tablefield_pro']->id . '/field_settings_defaults', array( $this, 'field_settings_defaults' ), 10, 1 );
			\n}
			\n
			\n// Implements checkboxes
			\n
			\nfunction filter_field_settings( $settings ) {
			\n
			\n	foreach ( $settings as $key => $item ) {
			\n
			\n		//if ( array_key_exists( $item['name'], $GLOBALS['acf_tablefield_pro']->state['toolbar_cells'] ) ) {
			\n
			\n			if ( $item['name'] === '<overlay_id>' ) {
			\n
			\n				$settings[ $key ]['choices']['tab/<tab_id>'] = __( '<label>', $GLOBALS['acf_tablefield_pro']->text_domain );
			\n				$settings[ $key ]['choices']['fieldgroup/<fieldgroup_id>'] = __( '<label>', $GLOBALS['acf_tablefield_pro']->text_domain );
			\n				$settings[ $key ]['choices']['field/<field_id>'] = __( '<label>', $GLOBALS['acf_tablefield_pro']->text_domain );
			\n				$settings[ $key ]['choices']['content/<content_id>'] = __( '<label>', $GLOBALS['acf_tablefield_pro']->text_domain );
			\n			}
			\n		//}
			\n	}
			\n
			\n	return $settings;
			\n}
			\n
			\n// Defines checkbox checked by default
			\n
			\nfunction field_settings_defaults( $defaults ) {
			\n
			\n	if ( empty( $defaults['<overlay_id>'] ) ) {
			\n
			\n		$defaults['<overlay_id>'] = array();
			\n	}
			\n
			\n	array_push( $defaults['<overlay_id>'], 'tab/kickstart' );
			\n	array_push( $defaults['<overlay_id>'], 'fieldgroup/kickstart' );
			\n	array_push( $defaults['<overlay_id>'], 'field/kickstart' );
			\n
			\n	return $defaults;
			\n}",
	},

	{
		"blocktype": "html",
		"content": "This field settings checkboxes needs also to be defined in the javascript module \"overlay\" by the filter `field_settings`."
	},

	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Adds fields from field settings",
		"code": "t.init = function() {
				\n
				\n	ACFTableFieldPro.core.add_filter( 'overlay', 'field_settings', t.add_field_settings );
				\n};
				\n
				\nt.add_field_settings = function( field_settings ) {
				\n
				\n	field_settings.push(
				\n		'tab/<tab_id>',
				\n		'fieldgroup/<fieldgroup_id>',
				\n		'field/<field_id>',
				\n		'content/<content_id>',
				\n	);
				\n
				\n	return field_settings;
				\n};
			",
	},




	{
		"blocktype": "heading",
		"text": "Using an individual overlay from the dom",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "An overlay open element and a overlay dom element can be connected via the attribut:  `data-overlay-target=\"\"`."
	},

	{
		"blocktype": "codeblock",
		"lang": "HTML",
		"style": "html",
		"code": "<button class=\"acf-table-pro-overlay-btn-open\" data-overlay-target=\"<overlay-id>\">open overlay</button>",
	},

	{
		"blocktype": "codeblock",
		"lang": "HTML",
		"style": "html",
		"code": "<div class=\"acf-table-pro-overlay-wrap js-acf-table-pro-overlay\" data-overlay-target=\"<overlay-id>\">
			\n	<div class=\"acf-table-pro-overlay-frame\">
			\n		<div class=\"acf-table-pro-overlay-content\">
			\n			// overlay content
			\n 		</div>
			\n		<div class=\"acf-table-pro-overlay-footer\">
			\n			<button class=\"acf-table-pro-overlay-btn-safe button button-primary button-large\">Safe</button>
			\n		</div>
			\n	</div>
			\n</div>",
	},

	{
		"blocktype": "parameters",
		"data": [
			{
				"name": 'data-overlay-target=""',
				"type": "string",
				"description": "Opens an specific overlay by an overlay-id. If the attribut is empty or not set, the default overlay will open."
			},
		],
	},




	{
		"blocktype": "heading",
		"text": "Content types",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "Table cells contents can be different. There are some core content types like \"Simple Text\" and \"Editor\". They can selected in the tab \"Content Type\" for the whole table and altered for columns, rows and even single cells."
	},

	{
		"blocktype": "heading",
		"text": "Adding a new content type",
		"level": 3,
	},

	{
		"blocktype": "html",
		"content": "Every content type must have an unique slug width ideally 2 letters."
	},

	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"code": "t.init = function() {
				\n
				\n	ACFTableFieldPro.core.add_filter( 'overlay', 'add_overlay_field_parameters', t.add_content_type_option );
				\n};
				\n
				\nt.add_content_type_option = function( p ) {
				\n
				\n	if ( p.id === 'cont_type') {
				\n
				\n		p.options['<slug>'] = '<label>';
				\n	}
				\n
				\n	return p;
				\n};",
	},

	{
		"blocktype": "heading",
		"text": "Implementing content editing",
		"level": 3,
	},

	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"code": "t.run = function() {
				\n
				\n	t.my_cell_editor();
				\n};
				\n
				\nt.my_cell_editor = function() {
				\n
				\n	t.obj.body.on( 'click.acf-table-pro-field-my-editor-open', '[data-cont-type=\"<slug>\"]', function( e ) {
				\n
				\n		e.stopImmediatePropagation();
				\n
				\n		// get cell content
				\n		var that = $( this ),
				\n			obj_cell_cont = that.find( '.' + ACFTableFieldPro.main.param.classes.table_cell_cont ),
				\n			content = obj_cell_cont.html();
				\n
				\n		// Use your own editing, saving and validation methodes.
				\n	} );
				\n};"
	},


	{
		"blocktype": "heading",
		"text": "Methodes and Filters",
		"level": 2,
	},

	{
		"blocktype": "html",
		"content": "All overlay methodes and filter links and additional documented below…"
	},

	{
		"blocktype": "methode_list",
		"search": {
			"module": "overlay"
		},
	},

	{
		"blocktype": "filter_list",
		"search": {
			"module": "overlay"
		},
	},

	{
		"blocktype": "methode",
		"search": {
			"module": "overlay"
		},
	},


	{
		"blocktype": "filter",
		"search": {
			"module": "overlay"
		},
	},

	{
		"blocktype": "page_content",
	},



]
---
