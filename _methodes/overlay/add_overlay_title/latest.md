---
title: Add Overlay Title
layout: methode
group: overlay
slug: add_overlay_title
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.add_overlay_title({});",
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
				"description": "Assigns an overlay by id."
			},
			{
				"name": "title",
				"type": "string",
				"description": "Defines a title to display in the overlay."
			}
		],
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
			\n	ACFTableFieldPro.overlay.add_overlay_title({
			\n		'overlay_id': 'my_overlay', // required
			\n		'title': 'My Overlay Title', // required
			\n	});
			\n}",
	},
]

---
