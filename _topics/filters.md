---
title: Filters
topic: filters
layout: page
contentblocks: [
	{
		"blocktype": "menu_topic",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Add a filter",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( scope, filterslug, handler );",
	},
	{
		"blocktype": "html",
		"content": "Example of adding a filter in a module…",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
			\n
			\n	ACFTableFieldPro.core.add_filter( 'main', 'data_defaults', t.add_default_data );
			\n
			\n};
			\n
			\nt.add_default_data = function( default_data ) {
			\n
			\n	// add your default data
			\n	default_data.p.o.myoption = 'default data';
			\n
			\n	return default_data;
			\n}",
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Provide a filter",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "var value = ACFTableFieldPro.core.do_filter( scope, filterslug, value );",
	},
	{
		"blocktype": "html",
		"content": "Example of providing a filter in a module…",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
			\n
			\n	var string = '';
			\n
			\n	string = ACFTableFieldPro.core.do_filter( 'main', 'filter_string', string );
			\n
			\n};"
	}
]
---
