---
title: Get Object Size
layout: methode
group: core
slug: get_object_size
version: latest

contentblocks: [
	{
	"blocktype": "html",
	"content": "Returns the size of the given object."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.get_object_size( object );"
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "
		\nt.run = function() {
		\n
		\n	var object = {
		\n		\"1\": \"one\",
		\n		\"2\": \"two\",
		\n		\"3\": \"three\",
		\n	};
		\n
		\n	var size_of_object = ACFTableFieldPro.core.get_object_size( object );
		\n
		\n	// size_of_object = 3;
		\n};
		\n",
	},
]

---
