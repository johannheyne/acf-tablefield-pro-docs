---
title: Get Table Attr tbody Cell
layout: filter
group: main
lang: php
slug: /get_table/attr/tbody/cell
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/attr/tbody/cell', function( $attr, $cell_data, $col_index, $table_data ) {
			\n
			\n	// array_push( $attr['class'], 'highlighted' );
			\n
			\n	return $attr;
			\n}, 10, 4 );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
