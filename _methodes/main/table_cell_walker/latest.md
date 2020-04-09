---
title: Table Cell Walker
layout: methode
group: main
slug: table_cell_walker
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.main.table_cell_walker( table, function( object ) {
		\n
		\n	/*
		\n	object.is_new_row
		\n	object.data_section_key
		\n	object.row_index
		\n	object.row_opt
		\n	object.cell_index
		\n	object.cell_opt
		\n	object.cell_cont
		\n	*/
		\n
		\n	return true; // stops the walker
		\n});",
	},
	{
		"blocktype": "heading",
		"text": "Parameters",
		"level": 3,
	},
	{
		"blocktype": "parameters",
		"data": [
			{
				"name": "<a href=\"/topics/table_object/\">table</a>",
				"type": "object",
				"description": "The object of the table to walk the table data.",
			},
			{
				"name": "callback",
				"type": "function",
				"description": "A function with one object parameter."
			}
		],
	},
]

---
