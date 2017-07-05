---
title: Field Data
topic: fields_data
layout: page

contentblocks: [
	{
		"blocktype": "heading",
		"level": "##",
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
		\n	\"p\":{
		\n		\"o\":{
		\n			\"uh\":1
		\n		}
		\n	},
		\n	\"c\":[
		\n		{\"p\":\"\"},
		\n		{\"p\":\"\"}
		\n	],
		\n	\"h\":[
		\n		{\"c\":\"A\"},
		\n		{\"c\":\"B\"}
		\n	],
		\n	\"b\":[
		\n		[
		\n			{\"c\":\"1\"},
		\n			{\"c\":\"some\"}
		\n		],
		\n		[
		\n			{\"c\":\"2\"},
		\n			{\"c\":\"thing\"}
		\n		]
		\n	]
		\n}",
	},
	{
		"blocktype": "heading",
		"level": "##",
		"text": "Table Parameter",
	},
	{
		"blocktype": "codeblock",
		"lang": ".json",
		"style": "js",
		"code": "{
		\n	\"p\":{
		\n		\"o\":{
		\n			\"uh\":1
		\n		}
		\n	}
		\n}",
	},
	{
		"blocktype": "html",
		"content": "The object `\"p\"` stands for parameters of this table. This parameter object has an object `\"o\"` which stands for options.",
	},
	{
		"blocktype": "heading",
		"level": "##",
		"text": "Table Options",
	},
	{
		"blocktype": "table",
		"data": [
			[
				"Name", "Type", "Decription"
			],
			[
				"uh", "boolean", "Use header "
			]
		],
	},
]
---
