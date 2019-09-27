---
title: Select Field Options
layout: filter
group: overlay
slug: get_field_select/options
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "The following code shows how to remove an select field option on a specific field depending on an empty field setting.",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'overlay', 'get_field_select/options', function( options, param ) {
			\n
			\n	var current_table_data = ACFTableFieldPro.main.tables[ ACFTableFieldPro.overlay.state.field_key ];
			\n
			\n	if (
			\n		param.field.id = 'cont_type' &&
			\n		$.inArray( 'editor', current_table_data.field_settings[ ACFTableFieldPro.overlay.state.overlay_id ] ) === -1
			\n	) {
			\n
			\n		delete options['ed'];
			\n	}
			\n
			\n	return options;
			\n} );"
	},
	{
		"blocktype": "heading",
		"text": "Parameters for \"param\"",
		"level": 3,
	},
	{
		"blocktype": "parameters",
		"data": [
			{
				"name": "field",
				"type": "object",
			},
			{
				"name": "options",
				"type": "object",
			}
		],
	}
]
---
