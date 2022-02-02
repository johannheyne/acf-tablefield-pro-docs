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
		"content": "This is an ACF native methode. If the given field is a \"table_pro\" fieldtype, `get_field()` returns the table data array."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "$table_data = get_table( $field_name, $post_id );",
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
