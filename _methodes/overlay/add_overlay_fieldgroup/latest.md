---
title: Add Overlay Fieldgroup
layout: methode
group: overlay
slug: add_overlay_fieldgroup
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.add_overlay_fieldgroup({});",
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
				"name": "id",
				"type": "string",
				"description": "Defines the id of that fieldgroup."
			},
			{
				"name": "tab_id",
				"type": "string",
				"description": "Assigns an tab_id."
			},
			{
				"name": "overlay_id",
				"type": "array",
				"description": "Defines an array of overlay ID´s the fieldgroup is limited to.",
				"default": "false"
			}
		],
	},
	{
		"blocktype": "codeblock_module_example",
		"lang": "JS",
		"style": "js",
		"title": "Example",
		"code": "t.run = function() {
			\n
			\n	ACFTableFieldPro.overlay.add_overlay_fieldgroup({
			\n		'id': 'fieldgroup_id', // required
			\n		'tab_id': 'tab_id', // required
			\n		'overlay_id': [ 'overlay_id' ] // optional
			\n	});
			\n}",
	},
]

---
