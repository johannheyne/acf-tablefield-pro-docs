---
title: Do Action
layout: methode
group: core
slug: do_action
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.do_action( part, filter, param );",
	},
	{
		"blocktype": "html",
		"content": "The example below shows a action providing an object for the action."
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
		\n	ACFTableFieldPro.core.do_action( 'mymodule', 'object_width', object );
		\n};
		\n
		\n",
	},
	{
		"blocktype": "html",
		"content": "Another module could use this action like that…"
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"module_name": "OtherModule",
		"code": "t.init = function() {
		\n
		\n	ACFTableFieldPro.core.add_action( 'mymodule', 'object_width', t.action_object_width );
		\n};
		\n
		\nt.action_object_width = function( object ) {
		\n
		\n	if ( object.height > 10 ) {
		\n		
		\n		// do something
		\n	}
		\n
		\n}",
	},
]

---
