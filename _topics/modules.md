---
title: Modules
topic: modules
layout: page
table_of_content: "no"

contentblocks: [
	{
		"blocktype": "menu_topic",
	},
	{
		"blocktype": "messageblock",
		"type": "info",
		"text": "Modules with a trailing lodash in the foldername like `_module_kickstart` are ignored.",

	},
	{
		"blocktype": "heading",
		"text": "Basic Code of an Extend Module",
		"level": 2,
	},
	{
		"blocktype": "codeblock_module_example",
		"code": "
		\n
		\nt.init = function() {
		\n
		\n	/* All init() functions of all modules are called
		\n	before any run() function will be called. Use actions
		\n	and filters here to attach your module functionalities.
		\n	*/
		\n};
		\n
		\nt.run = function() {
		\n
		\n	/* Runs after all modules are initialised by init(). */
		\n};
		\n
		\n// your functions
		\n",
	},

]
---
