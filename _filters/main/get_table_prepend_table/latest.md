---
title: Get Table Prepend Table
layout: filter
group: main
lang: php
slug: /get_table/prepend_table
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "This filter enables HTML prepending the table using `get_table()`. This filter is for example used tuo insert the table caption."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/prepend_table', function( $html, $param, $table_data ) {
			\n
			\n	// $param['field_name']
			\n	// $param['post_id']
			\n
			\n	return $html;
			\n}, 10, 3 );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
