---
title: Init State
layout: methode
group: core
slug: init_state
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "Variables of a module, in particular those which initiate further actions when changing, live in the state property of the module object."
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.init_state( module_name, state );",
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "
			t.init = function() {
			\n
			\n	ACFTableFieldPro.core.init_state( 'mymodule', {
			\n		key: value
			\n	} );
			\n};
			\n
			\nt.run = function() {
			\n
			\n	console.log( t.state.key );
			\n};
		",
	},

]

---
