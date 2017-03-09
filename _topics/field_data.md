---
title: Field Data
topic: fields_data
layout: page
---

{% include menu_topic/template.html %}

## Example table

<table class="sample_table">
	<thead>
		<th>A</th>
		<th>B</th>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>some</td>
		</tr>
		<tr>
			<td>2</td>
			<td>thing</td>
		</tr>
	</tbody>
</table>

A table fields data are stored as a single JSON string. The table above is stored in the database as the following JSON string…

{% capture code %}
{
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
			{"c":"some"}
		],
		[
			{"c":"2"},
			{"c":"thing"}
		]
	]
}
{% endcapture %}

{% include codeblock/template.html
lang=".json"
style="js"
code=code
%}

## Table Parameter

{% capture code %}
{
	"p":{
		"o":{
			"uh":1
		}
	}
}
{% endcapture %}

{% include codeblock/template.html
lang=".json"
style="js"
code=code
%}

The object `"p"` stands for parameters of this table. This parameter object has an object `"o"` which stands for options.

### Table Options

| Name           | Type           | Decription     |
| :------------- | :------------- | :------------- |
| uh             | boolean        | Use header     |
