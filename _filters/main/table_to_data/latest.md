---
title: Table to Data
layout: filter
group: main
slug: table_to_data
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'table_to_data', function( table ) {
			\n
			\n	ACFTableFieldPro.main.table_to_data_section( {
			\n		'sel_row': 'selector of row',
			\n		'sel_cell': 'selector of cell',
			\n		'data_key': 'x',
			\n		'get_content': true
			\n	}, table );
			\n
			\n	return table;
			\n} );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
