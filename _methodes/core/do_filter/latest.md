---
title: Do Filter
layout: methode
group: core
slug: do_filter
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.do_filter( part, filter, value, param );",
	},
	{
		"blocktype": "html",
		"content": "The example below shows a filter for a value of an object. Since other values may be needed to change the value in the filter, you can pass these additional as parameters."
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"module_name": "MyModule",
		"code": "t.run = function() {
		\n
		\n	var object = {
		\n		'width': 20,
		\n		'height': 20,
		\n	}
		\n
		\n	var object.width = ACFTableFieldPro.core.do_filter( 'mymodule', 'object_width', object.width, object );
		\n};
		\n
		\n",
	},
	{
		"blocktype": "html",
		"content": "Another module could use this filter like that…"
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"module_name": "OtherModule",
		"code": "t.init = function() {
		\n
		\n	ACFTableFieldPro.core.add_filter( 'mymodule', 'object_width', t.set_object_width );
		\n};
		\n
		\nt.set_object_width = function( object_width, object ) {
		\n
		\n	if ( object.height > 10 ) {
		\n		
		\n		object_width = object_width + 10;
		\n	}
		\n
		\n	return object_width;
		\n}",
	},
]

---
