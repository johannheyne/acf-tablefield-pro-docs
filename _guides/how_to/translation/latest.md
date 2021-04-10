---
title: Translation
layout: guides
group: how_to
slug: translation
slug_title: Translation
version: latest

contentblocks: [
	{
		"blocktype": "html",
		"content": "Using .po Files in folder `/lang/`"
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Translations in PHP files",
	},
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "
			\n __( 'Text', $GLOBALS['acf_tablefield_pro']->text_domain );
			"
	},
	{
		"blocktype": "heading",
		"level": 2,
		"text": "Translations in JavaScript files",
	},
	{
		"blocktype": "html",
		"content": "Add .pot strings in file `acf-table-pro-v5.php` in methode `l10n()`."
	},

	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "
			\n acf._e( 'table_pro', 'Text' );
			"
	},
]

---
