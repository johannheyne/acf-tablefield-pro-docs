---
title: Get Table Attr tbody Row
layout: filter
group: main
lang: php
slug: /get_table/attr/tbody/row
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/attr/tbody/row', function( $attr, $data ) {
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
