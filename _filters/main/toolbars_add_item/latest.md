---
title: Toolbars Add Item
layout: filter
group: main
slug: toolbars_add_item
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "Adds items to the toolbar before or after the table."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'toolbars/items', function( items ) {
			\n
			\n	items.push({
			\n		toolbar: 'top',
			\n		html: '',
			\n	});
			\n
			\n	return items;
			\n}, 20 );"
	},
	{
		"blocktype": "html",
		"content": "",
	},
]
---
