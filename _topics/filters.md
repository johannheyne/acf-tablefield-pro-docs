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
		"code": "ACFTableFieldPro.core.add_filter( scope, filtername, handler, priority );",
	},
	{
		"blocktype": "heading",
		"level": 3,
		"text": "Parameters",
	},
	{
		"blocktype": "parameters",
		"data": [
			{
				"name": "scope",
				"type": "string",
				"description": "The slug of the module",
			},
			{
				"name": "filterslug",
				"type": "string",
				"description": "The name of the filter.",
			},
			{
				"name": "filterslug",
				"type": "callable",
				"description": "The callback function.",
			},
			{
				"name": "priority",
				"type": "integer",
				"optional": "y",
				"default": "10",
				"description": "Used to specify the order in which the functions associated with a particular action are executed. Lower numbers correspond with earlier execution, and functions with the same priority are executed in the order in which they were added.",
			}
		],
	},
	{
		"blocktype": "heading",
		"level": 3,
		"text": "Example of adding a filter in a module…",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
			\n
			\n	ACFTableFieldPro.core.add_filter( 'main', 'data_defaults', t.add_default_data, 20 );
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
		"code": "var value = ACFTableFieldPro.core.do_filter( scope, filtername, value, param );",
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
			\n	var string = '',
			\n		param = {
			\n			'key': 'value'
			\n		};
			\n
			\n	string = ACFTableFieldPro.core.do_filter( 'main', 'filter_string', string, param );
			\n
			\n};"
	}
]
---
