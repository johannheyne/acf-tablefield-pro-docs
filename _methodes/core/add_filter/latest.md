---
title: Add Filter
layout: methode
group: core
slug: add_filter
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( scope, filterslug, handler );",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
		\n
		\n	ACFTableFieldPro.core.add_filter( 'main', 'data_defaults', t.add_default_data );
		\n};
		\n
		\nt.add_default_data = function( default_data, param ) {
		\n
		\n	// add your default data
		\n	default_data.p.o.myoption = 'default data';
		\n
		\n	return default_data;
		\n}",
	},
]

---
