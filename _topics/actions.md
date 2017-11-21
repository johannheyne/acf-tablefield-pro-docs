---
title: Actions
topic: actions
layout: page
contentblocks: [
	{
		"blocktype": "menu_topic",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Add a action",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_action( scope, filterslug, handler );",
	},
	{
		"blocktype": "html",
		"content": "Example of adding a action in a module…",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
			\n
			\n	ACFTableFieldPro.core.add_action( 'main', 'table_render_end', t.on_table_render_end );
			\n};
			\n
			\nt.on_table_render_end = function( table ) {
			\n
			\n	// do something
			\n}",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Provide a action",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "var value = ACFTableFieldPro.core.do_action( scope, filterslug, param );",
	},
	{
		"blocktype": "html",
		"content": "Example of providing a action in a module…",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.run = function() {
			\n
			\n	var param = {
			\n			'key': 'value'
			\n		};
			\n
			\n	ACFTableFieldPro.core.do_action( 'main', 'filter_string', param );
			\n};"
	}
]
---
