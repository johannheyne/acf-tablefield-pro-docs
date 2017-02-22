---
title: Field Data
topic: fields_data
layout: page
---

<h1>Field Data</h1>

{% include topic_menu.html %}

Example table.

<table class="sample-table">
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

{% include codeblock.html
lang="JS"
style="js"
code="{
	&quot;p&quot;:{
		&quot;o&quot;:{
			&quot;uh&quot;:1
		}
	},
	&quot;c&quot;:[
		{&quot;p&quot;:&quot;&quot;},
		{&quot;p&quot;:&quot;&quot;}
	],
	&quot;h&quot;:[
		{&quot;c&quot;:&quot;A&quot;},
		{&quot;c&quot;:&quot;B&quot;}
	],
	&quot;b&quot;:[
		[
			{&quot;c&quot;:&quot;1&quot;},
			{&quot;c&quot;:&quot;some&quot;}
		],
		[
			{&quot;c&quot;:&quot;2&quot;},
			{&quot;c&quot;:&quot;thing&quot;}
		]
	]
}"
%}

The JSON string has multiple sections and begins with an object `"p"` which stands for parameters.

## Table Parameter

This parameter object has an object `"o"` which stands for options.

### Table Options

| Name           | Type           | Decription     |
| :------------- | :------------- | :------------- |
| uh             | boolean        | Use header     |
