---
title: Array Move
layout: methode
group: core
slug: array_move
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "Takes an entry of an array or object by its index and moves it to an new index."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.array_move( array, old_index, new_index );",
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
		\n	var array = [ 'one', 'two', 'three' ];
		\n
		\n	array = ACFTableFieldPro.core.array_move( array, 0, 2 );
		\n
		\n	// result: [ 'two', 'three', 'one' ]
		\n};
		\n
		",
	},
]

---
