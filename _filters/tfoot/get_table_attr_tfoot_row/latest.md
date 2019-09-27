---
title: Get Table Attr tfoot Row
layout: filter
group: main
lang: php
slug: /get_table/attr/tfoot/row
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/attr/tfoot/row', function( $attr, $row_data ) {
			\n
			\n	// array_push( $attr['class'], 'highlighted' );
			\n
			\n	return $attr;
			\n} );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
