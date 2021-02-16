---
title: Add Overlay Field
layout: methode
group: overlay
slug: add_overlay_field
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.overlay.add_overlay_field({});",
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
				"description": "unique field id"
			},
			{
				"name": "field_group_id",
				"type": "string",
				"description": "Assign the field to an overlay fieldgroup by id."
			},
			{
				"name": "type",
				"type": "string",
				"options": ["select", "(not yet integrated: text, textarea, radio, checkbox, note)"],
				"description": "Defines the type of the field."
			},
			{
				"name": "options",
				"type": "object",
				"description": "Defines the values and labels of an select, radio or checkbox field by `'value': 'label'` pairs."
			},
			{
				"name": "data_key",
				"type": "string",
				"description": "Defines the key of the option to store."
			},
			{
				"name": "default_value",
				"type": "string",
				"description": "Defines the key of the option to store.",
				"optional": "y"
			},
			{
				"name": "default_value_root",
				"type": "string",
				"description": "Defines an option key that is used for the table option when default_value is empty equal 'inherit'. Inherit should not be an root option",
				"optional": "y"
			},
			{
				"name": "label",
				"type": "string",
				"description": "Defines the label of the field.",
				"optional": "y"
			},
			{
				"name": "description",
				"type": "string",
				"description": "Defines the description of the field.",
				"optional": "y"
			},
			{
				"name": "placeholder",
				"type": "string",
				"description": "Defines the placeholder on text and textarea fields.",
				"optional": "y"
			},
			{
				"name": "conditionals",
				"type": "boolean, array (array of key value objects)",
				"default": "false",
				"description": "Determines the visibility of the field depending on the status of other fields",
				"code": "[
				\n	{
				\n		'field_group_id': id,
				\n		'field_id': id,
				\n		'field_value': value,
				\n		'comparison': '==' // ==, !=, <, >
				\n	}
				\n]"
			},
			{
				"name": "on_change",
				"type": "array",
				"description": "Defines an array of functions to call after field value changed. Provides field_states as parameter to the functions.",
				"code": "field_states = {
				\n	class: \"\"
				\n	conditionals: [],
				\n	data_key: \"\",
				\n	default_value: \"\",
				\n	default_value_root: \"\",
				\n	description: false,
				\n	field_group_id: \"\",
				\n	hide_on_overlay_id: [],
				\n	id: \"\",
				\n	label: \"\",
				\n	on_change: [],
				\n	options: {},
				\n	placeholder: false,
				\n	show_on_overlay_id: [],
				\n	type: \"\",
				\n	value: \"\"
				\n}"
			},
			{
				"name": "show_on_overlay_id",
				"type": "array",
				"description": "Defines an array of overlay ID´s the field should appear only."
			},
			{
				"name": "hide_on_overlay_id",
				"type": "array",
				"description": "Defines an array of overlay ID´s on witch the field should not appear."
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
			\n	ACFTableFieldPro.overlay.add_overlay_field({
			\n		'id': 'my_field', // unique
			\n		'field_group_id': false, // registered fieldgroup id in t.state.fieldgroups
			\n		'type': false, // select (more to come: text, textarea, radio, checkbox, note )
			\n		'options': {
			\n			'value': 'label'
			\n		},
			\n		'data_key': false,
			\n		'default_value': false,
			\n		'label': false, // boolean, string
			\n		'description': false,
			\n		'placeholder': false,
			\n		'fixed': false, // ?
			\n		/* not implemented yet
			\n		'conditionals': [
			\n			{
			\n				'field_group_id': id,
			\n				'field_id': id,
			\n				'field_value': value,
			\n				'comparison': '=='
			\n			}
			\n		],*/
			\n		'on_change': [ t.field_changed ] // array of functions
			\n	});
			\n
			\n};
			\n
			\nt.field_changed = function( field_state ) {
			\n	// do something
			\n};
			",
	},
]

---
