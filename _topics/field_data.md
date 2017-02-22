---
title: Field Data
layout: page
---

<h1>Field Data</h1>

{% include topic_menu.html %}

The table field data are stored as a single JSON string.

<table>
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

The table above is stored in the database as a JSON string below.

{% include codeblock.html
lang="JS"
style="js"
code="{
	\"p\":{
		\"o\":{
			\"uh\":1
		}
	},
	\"c\":[
		{\"p\":\"\"},
		{\"p\":\"\"}
	],
	\"h\":[
		{\"c\":\"A\"},
		{\"c\":\"B\"}
	],
	\"b\":[
		[
			{\"c\":\"1\"},
			{\"c\":\"some\"}
		],
		[
			{\"c\":\"2\"},
			{\"c\":\"thing\"}
		]
	]
}"
%}
