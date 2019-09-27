---
title: Add Action
layout: methode
group: core
slug: add_action
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_action( scope, actionslug, handler );",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
		\n
		\n	ACFTableFieldPro.core.add_action( 'main', 'data_defaults', t.action_data_defaults );
		\n};
		\n
		\nt.action_data_defaults = function( table ) {
		\n
		\n	// do something
		\n
		\n}",
	},
]

---
