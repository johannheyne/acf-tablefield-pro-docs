---
title: Get Field Key
layout: methode
group: main
slug: get_field_key
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "Gets the table field key by an HTML element of the table."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "var field_key = ACFTableFieldPro.main.get_field_key( $element );
		\n
		\n// get the table object
		\nvar table = ACFTableFieldPro.main.tables[ field_key ];",
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
				"name": "element",
				"type": "object",
				"description": "An element of the table.",
			},
		],
	},
]

---
