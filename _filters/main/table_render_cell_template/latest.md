---
title: Table Render Row Template
layout: filter
group: main
slug: table_render_cell_template
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'table_render_cell_template', function( string, param ) {
			\n
			\n	/*
			\n	param = {
			\n		cell: {
			\n			'data_key': false,
			\n			'data_slug': false,
			\n			'row_index': false,
			\n			'object_row': false,
			\n			'template_cell': false,
			\n			'cell_opt': {},
			\n			'cell_cont': '',
			\n			'right_class': false, // class of last elememt of row to put cells before
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
