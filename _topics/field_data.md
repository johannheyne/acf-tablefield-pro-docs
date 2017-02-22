---
title: Field Data
layout: page
---

<h1>Field Data</h1>

{% include topic_menu.html %}

The table field data are stored as a single JSON string.

<table class="sample-table margin-vert">
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
