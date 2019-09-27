---
title: Fieldsettings
layout: filter
group: overlay
slug: field_settings
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "This filters the `ACFTableFieldPro.overlay.state.field_settings` array. This array represents all field setting keys that exist for the field when editing at field group. This field setting keys are required to check the existence of checkboxes in order to derive the status \"not checked\". Since checkboxes do not submit/leave a value if they are not checked, the status \"not checked\" cannot be determined easily.",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'overlay', 'field_settings', function( field_settings ) {
			\n
			\n	field_settings.push(
			\n		'tab/span',
			\n	);
			\n
			\n	return field_settings;
			\n} );"
	},

]
---
