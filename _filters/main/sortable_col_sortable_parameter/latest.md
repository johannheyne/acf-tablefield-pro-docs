---
title: Sortable Cols
layout: filter
group: main
slug: sortable_col/sortable_parameter
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'sortable_col/sortable_parameter', function( sortable_param, param ) {
			\n
			\n	return sortable_param;
			\n} );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
	{
		"blocktype": "heading",
		"text": "Parameter",
		"level": 2,
	},
	{
	"blocktype": "parameters",
	"lang": "js",
	"data": [
		{
			"name": "param.table",
			"type": "object",
			"description": "Provides the [table](/topics/table_object/) object.",
			"message": {
				"type": "danger",
				"message": "Only available on updating a table.",
			},
		}
	]
}
]
---
