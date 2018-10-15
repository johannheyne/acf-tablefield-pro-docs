---
title: Fieldgroup Settings Not Saving
layout: page
contentblocks: [
	{
		"blocktype": "html",
		"content": "ACF needs the `.acf-field-object` element of the fieldgroup to be triggered with an \"change\" event to detect changes and saving changes of the fieldgroup. The following function is used by `ACFTableFieldProMain::update_data_of_acf_field_input()` to trigger the \"change\" event on that object.",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldProMain::field_group_settings_changed( table );"
	},
	{
		"blocktype": "html",
		"content": "If fieldgroup settings not saving, the ACF way to detect changes could have changed. The function above needs to be adjusted.",
	},
]
---
