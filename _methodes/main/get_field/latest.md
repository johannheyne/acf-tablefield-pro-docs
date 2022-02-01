---
title: Get Field
layout: methode
group: main
slug: get_field
version: latest
lang: php

contentblocks: [
	{
		"blocktype": "html",
		"content": "This is an ACF native methode. If the given field is a \"table_pro\" fieldtype, `get_field()` returns an HTML table or the table data array wether the third parameter is true or false."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "echo get_table( $field_name, $post_id );
		\n$table_data = get_table( $field_name, $post_id, false );
		",
	},
	{
		"blocktype": "parameters",
		"data": [
				{
					"name": "field_name",
					"optional": "n",
					"type": "string",
				},
				{
					"name": "post_id",
					"optional": "y",
					"type": "integer",
				},
			]
	}
]

---
