---
title: Developer
layout: module
group: extends
slug: developer
version: latest

contentblocks: [
	{
		"blocktype": "heading",
		"text": "Developer Mode",
		"level": 2,
	},
	{
		"blocktype": "html",
		"content": "The developer mode can be enabled by defining a constant in your functions.php file."
	},
	{
		"blocktype": "codeblock",
		"lang": "PHP",
		"style": "php",
		"code": "define( 'ACF_TABLE_FIELD_PRO_DEVELOPER_MODE', true );"
	},
	{
		"blocktype": "html",
		"content": "With the developer mode enabled, a button above the table editor is embeded, that opens a modal containing the current table field data."
	}
]
---
