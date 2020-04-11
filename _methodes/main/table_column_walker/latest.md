---
title: Table Column Walker
layout: methode
group: main
slug: table_column_walker
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.main.table_column_walker( table, function( col_index, col_data ) {
		\n
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
				"description": "The object of the table to walk the table data. Requires at least the `table.data` and  `table.data_defaults`  object.",
			},
			{
				"name": "callback",
				"type": "function",
				"description": "A function with two parameters."
			}
		],
	},
]

---
