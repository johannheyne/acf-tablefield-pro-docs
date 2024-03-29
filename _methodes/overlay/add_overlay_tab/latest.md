---
title: Add Overlay Tab
layout: methode
group: overlay
slug: add_overlay_tab
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.add_overlay_tab({});",
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
				"type": "array",
				"description": "Assigns one ore more id´s of overlay´s."
			},
			{
				"name": "tab_id",
				"type": "string",
				"description": "Defines the tab_id."
			},
			{
				"name": "label",
				"type": "string",
				"description": "Sets the label of the tab."
			},
			{
				"name": "content",
				"type": "string",
				"description": "Sets the content of the tab."
			},
			{
				"name": "position",
				"type": "object",
				"optional": "y",
				"description": "Position the tab before or after another tab."
			},
			{
				"name": "position.tab_id",
				"type": "string",
				"description": "Defines the id of the tab on which to align."
			},
			{
				"name": "position.type",
				"type": "string",
				"options": [ "before", "after" ],
				"description": "Defines, if the tab should position before or after the other tab."
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
			\n	ACFTableFieldPro.overlay.add_overlay_tab({
			\n		'overlay_id': ['my_overlay'], // required
			\n		'tab_id': 'my_tab', // required
			\n		'label': 'My Tab', // required
			\n		'content': 'My tabs content…',
			\n		// optional…
			\n		'position': {
			\n			'tab_id': 'another_tab',
			\n			'type': 'after'
			\n		}
			\n	});
			\n}",
	},
]

---
