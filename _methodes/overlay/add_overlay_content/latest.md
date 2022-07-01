---
title: Add Overlay Content
layout: methode
group: overlay
slug: add_overlay_content
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.add_overlay_content({});",
	},
	{
		"blocktype": "heading",
		"text": "Parameters",
		"level": 3,
	},
	{
		"blocktype": "parameters",
		"data": [
			{
				"name": "overlay_id",
				"type": "string",
				"description": "Assigns the id of an overlay."
			},
			{
				"name": "content",
				"type": "string",
				"description": "Defines the content to add."
			}
		]
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.init = function() {
			\n
			\n	ACFTableFieldPro.core.add_action( 'main', 'init_begin', t.add_options );
			\n}
			\n
			\nt.add_options = function() {
			\n
			\n	ACFTableFieldPro.overlay.add_overlay_content({
			\n		'overlay_id': 'my_overlay', // required
			\n		'content': 'My content…'
			\n	});
			\n}",
	},
]

---
