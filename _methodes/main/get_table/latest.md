---
title: Get Table
layout: methode
group: main
slug: get_table
version: latest
lang: php

contentblocks: [
	{
		"blocktype": "html",
		"content": "Returns an HTML table."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "echo get_table( $field_name, $post_id );",
	},
	{
		"blocktype": "parameters",
		"data": [
				{
					"name": "field_name",
					"optional": "n",
					"type": "string/array",
					"default": "false",
				},
				{
					"name": "post_id",
					"optional": "y",
					"type": "integer",
					"default": "get_the_ID()",
				},
			]
	}
]

---
