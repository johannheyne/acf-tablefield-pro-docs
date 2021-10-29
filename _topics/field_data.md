---
title: Field Data
menupos: 7
topic: fields_data
layout: page

contentblocks: [
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Example table",
	},
	{
		"blocktype": "table",
		"class": {
			"table": "sample_table",
		},
		"data": [
			[
				"A", "B",
			],
			[
				"1", "some",
			],
			[
				"2", "thing",
			]
		],
	},
	{
		"blocktype": "html",
		"content": "A table fields data are stored as a single JSON string. The table above is stored in the database as the following JSON string…
		",
	},
	{
		"blocktype": "codeblock",
		"lang": ".json",
		"style": "js",
		"code": "{
		\n	\"t\":{
		\n		\"o\":{
		\n			\"ct\":\"ed\" // content type
		\n			\"tb\":\"basic\" // toolbar for wysiwyg editor
		\n			\"uh\":\"y\" // use header
		\n			\"uf\":\"n\" // use footer
		\n			\"cols\":\"2\"
		\n			\"rows\":\"3\"
		\n			\"changed\":true // default table was changed
		\n		}
		\n	},
		\n	\"c\":[
		\n		{
		\n			\"c\": [
		\n				{
		\n					\"o\":\"\"
		\n				},
		\n				{
		\n					\"o\":\"\"
		\n				}
		\n			],
		\n			\"o\":\"\"
		\n		},
		\n	],
		\n	\"h\":[
		\n		{
		\n			\"c\": [
		\n				{
		\n					\"c\":\"A\",
		\n					\"o\":\"\"
		\n				},
		\n				{
		\n					\"c\":\"B\",
		\n					\"o\":\"\"
		\n				}
		\n			],
		\n			\"o\":\"\"
		\n		},
		\n	],
		\n	\"b\":[
		\n		{
		\n			\"c\": [
		\n				{
		\n					\"c\":\"1\",
		\n					\"o\":\"\"
		\n				},
		\n				{
		\n					\"c\":\"2\",
		\n					\"o\":\"\"
		\n				}
		\n			],
		\n			\"o\":\"\"
		\n		},
		\n		{
		\n			\"c\": [
		\n				{
		\n					\"c\":\"3\",
		\n					\"o\":\"\"
		\n				},
		\n				{
		\n					\"c\":\"4\",
		\n					\"o\":\"\"
		\n				}
		\n			],
		\n			\"o\":\"\"
		\n		}
		\n	]
		\n}",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Table Parameter",
	},
	{
		"blocktype": "codeblock",
		"lang": ".json",
		"style": "js",
		"code": "{
		\n	\"t\":{
		\n		\"o\":{
		\n			\"uh\":\"y\"
		\n		}
		\n	}
		\n}",
	},
	{
		"blocktype": "html",
		"content": "The object `\"t\"` stands for parameters of this table. This parameter object has an object `\"o\"` which stands for options.",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Table Options",
	},
	{
		"blocktype": "table",
		"data": [
			[
				"Name", "Decription", "Type", "Value", "Module"
			],
			[
				"changed", "Whether the table content was edited", "boolean", "false/true", "main"
			],
			[
				"uh", "Use header ", "string", "y/n", "thead"
			],
			[
				"uf", "Use footer", "string", "y/n", "tfoot"
			],
			[
				"cols", "Amount of the table body colums", "integer", "", "cols_rows_limit"
			],
			[
				"rows", "Amount of the table body rows", "integer", "", "cols_rows_limit"
			],
			[
				"ct", "Content type of cells", "string", "st/<a href=\"\">ed</a>", "cell_content_type"
			],
			[
				"tb", "Toolbar for wysiwyg editor", "string", "full", "editor"
			]
		],
	},
]
---
