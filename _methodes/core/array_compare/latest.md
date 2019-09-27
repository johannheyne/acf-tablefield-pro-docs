---
title: Array Compare
layout: methode
group: core
slug: array_compare
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "Compares two arrays for similarities and returns them."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.array_compare( array_1, array_2 );",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "
		\n
		\nt.run = function() {
		\n
		\n	var array_1 = [ 'one', 'two' ],
		\n	 	array_2 = [ 'one', 'tree' ];
		\n
		\n	var similarities = ACFTableFieldPro.core.array_move( array_1, array_2 );
		\n
		\n	// result of similarities = [ 'one' ]
		\n};
		\n
		",
	},
]

---
