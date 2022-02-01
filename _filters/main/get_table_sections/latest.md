---
title: Get Table Sections
layout: filter
group: main
lang: php
slug: /get_table/sections
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "This filter is used to register table data sections for `get_table()`."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/sections', function( $sections, $param, $table_data ) {
			\n
			\n	// $param['field_name']
			\n	// $param['post_id']
			\n
			\n	// Adds a section
			\n	$sections[] {
			\n		'elem_slug' => '', // HTML element slug like \"tbody\"
			\n		'data_key' => '', // Section key of the returning table data array
			\n	}
			\n
			\n	return $sections;
			\n}, 40, 3 );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
