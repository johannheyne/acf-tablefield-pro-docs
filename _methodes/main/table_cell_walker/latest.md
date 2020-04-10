---
title: Table Cell Walker
layout: methode
group: main
slug: table_cell_walker
version: latest

contentblocks: [
	{
		"blocktype": "codeblock",
		"lang": "JS",
		"style": "js",
		"code": "ACFTableFieldPro.main.table_cell_walker( table, function( object ) {
		\n
		\n		/*
		\n		object.is_new_row
		\n		object.data_section_key
		\n		object.row_index
		\n		object.row_opt
		\n		object.cell_index
		\n		object.cell_opt
		\n		object.cell_cont
		\n		*/
		\n
		\n		return true; // stops the walker
		\n	},
		\n	param
		\n);",
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
				"name": "<a href=\"/topics/table_object/\">table</a>",
				"type": "object",
				"description": "The object of the table to walk the table data. Requires at least the `table.data` and  `table.data_defaults`  object.",
			},
			{
				"name": "callback",
				"type": "function",
				"description": "A function with one object parameter."
			},
			{
				"name": "param",
				"optional": "yes",
				"type": "object",
				"description": "The parameters can be used to run through certain table sections and restrict to specific cell sectors.
				\n<pre><code class=\"language-js\">// default values:
				\nvar param = {
				\n    sections: [ 'b' ],	// (array or string 'all') defines the sections to walk
				\n    start_col: 0,		// (integer) defines the col index to start the walk
				\n    start_row: 0,		// (integer) defines the row index to start the walk
				\n    cols: false,		// (integer) restricts the amount of cols to walk
				\n    rows: false,		// (integer) restricts the amount of rows to walk
				\n};</code></pre>",
			}
		],
	},
]

---
