---
title: Get Table Attr Table
layout: filter
group: main
lang: php
slug: /get_table/attr/table
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "This filter is used in `get_table()` and enables to filter/add/remove attributes and their values of the `<table>` element."
	},
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/attr/table', function( $attr, $data ) {
			\n
			\n	$attr['border'] = array( '0' );
			\n
			\n	array_push( $attr['class'], 'highlighted' );
			\n	array_push( $attr['style'], 'width: 50%;' );
			\n
			\n	return $attr;
			\n} );"
	},
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "echo get_table( 'field_name' );
			\n
			\n// result:
			\n<table border=\"0\" class=\"highlighted\"></table>
			\n"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
