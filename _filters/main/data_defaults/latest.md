---
title: Data Defaults
layout: filter
group: main
slug: data_defaults
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'main', 'data_defaults', function( data ) {
		\n
		\n	return data;
		\n} );"
	},
	{
		"blocktype": "messageblock",
		"type": "warning",
		"text": "Avoid using this filter directly by a module. The reason is, that the data structure may change in future. Watch these [default data functions]().",
	},
]

---
