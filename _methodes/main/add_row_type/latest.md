---
title: Add Row Type
layout: methode
group: main
slug: add_row_type
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "Registers a new type of row. This is necessary to integrate these rows with functions such as sorting."
	},
	{
		"blocktype": "messageblock",
		"type": "info",
		"text": "<b>Occupied row selectors by core plugin:</b>
			\n - .acf-table-pro-body-row
			\n - .acf-table-pro-thead-row
			\n - .acf-table-pro-tfoot-row
		",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.main.add_row_type( {
			\n	row_selector: '.class-of-row'
			\n
		} );",
	},
	{
		"blocktype": "heading",
		"text": "Parameters",
		"level": 3,
	},
	{
		"blocktype": "parameters",
		"lang": "js",
		"data": [
			{
				"name": "row_selector",
				"type": "string",
				"description": "The selector of the row",
			}
		],
	},
]

---
