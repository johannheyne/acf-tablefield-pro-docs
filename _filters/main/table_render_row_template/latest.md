---
title: Table Render Row Template
layout: filter
group: main
slug: table_render_row_template
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'table_render_row_template', function( string, param ) {
			\n
			\n	/*
			\n	param = {
			\n		row: {
			\n			'data_key': false,
			\n			'data_slug': false,
			\n			'template_row': '',
			\n			'add_row_numbers': false,
			\n			'insert_target': 'bottom_row',
			\n			'insert_position': 'before'
			\n		},
			\n		table: {},
			\n		filter: {
			\n			part: 'slug',
			\n			filter: 'slug',
			\n		}
			\n	}
			\n	*/
			\n
			\n	if ( string === '' ) {
			\n
			\n		string = '';
			\n	}
			\n
			\n	return string;
			\n} );"
	},
]
---
