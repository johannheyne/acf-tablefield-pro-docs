---
title: Overlay Content
layout: filter
group: overlay
slug: overlay_content
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'overlay', 'overlay_content', function( param ) {
		\n
		\n	if ( param.overlay_id === '<string>' ) {
		\n
		\n		param.content = '<ovlerlay-content>';
		\n	}
		\n
		\n	return param;
		\n} );"
	},
	{
		"blocktype": "html",
		"content": "The `param.overlay_id` is provided by an data attribute `data-overlay-id=\"\"` of an element, that calls an overlay.",
	},
]
---
