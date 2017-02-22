---
title: Field Data
layout: page
---

<h1>Field Data</h1>

{% include topic_menu.html %}

The table field data are stored as a single JSON string.

| A    | B     |
| :--- | :---- |
| 1    | 2     |
| 3    | 4     |

The table above results in a JSON string below.

{% include codeblock.html
lang="JS"
style="js"
code="{
	"p":{
		"o":{
			"uh":1
		}
	},
	"c":[
		{"p":""},
		{"p":""}
	],
	"h":[
		{"c":"A"},
		{"c":"B"}
	],
	"b":[
		[
			{"c":"1"},
			{"c":"2"}
		],
		[
			{"c":"3"},
			{"c":"4"}
		]
	]
}"
%}
