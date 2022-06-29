---
title: Get Table Cell Element
layout: filter
group: main
lang: php
slug: /get_table/cell_elem
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "This filter enables changing the HTML element of cells."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "php",
		"code": "add_filter( 'acf_tablefield/get_table/cell_elem', function( $elem, $param ) {
			\n
			\n	// $param['elem_slug']
			\n	// $param['data_key']
			\n	// $param['table_options']
			\n	// $param['row_options']
			\n	// $param['cell_options']
			\n	// $param['row_index']
			\n	// $param['col_index']
			\n
			\n	return $elem;
			\n}, 10, 2 );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
