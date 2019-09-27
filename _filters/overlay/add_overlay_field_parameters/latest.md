---
title: Add Overlay Field Parameters
layout: filter
group: overlay
slug: add_overlay_field_parameters
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.core.add_filter( 'overlay', 'add_overlay_field_parameters', function( p ) {
			\n
			\n	if ( p.type === 'select' ) {
			\n
			\n		p.option['another'] = 'Another';
			\n	}
			\n
			\n	return p;
			\n} );"
	},
]
---
