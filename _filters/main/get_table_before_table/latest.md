---
title: Get Table Before Table
layout: filter
group: main
lang: php
slug: /get_table/before_table
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "This filter enables HTML before the table using `get_table()`."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/before_table', function( $html, $param, $table_data ) {
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
