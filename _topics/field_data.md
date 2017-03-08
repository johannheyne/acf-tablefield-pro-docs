---
title: Field Data
topic: fields_data
layout: page
---

# Field Data

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

{% include codeblock/template.html
title=".json"
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



## Table Parameter

{% include codeblock/template.html
lang=".json"
style="js"
code="{
	&quot;p&quot;:{
		&quot;o&quot;:{
			&quot;uh&quot;:1
		}
	}
}"
%}

The object `"p"` stands for parameters of this table. This parameter object has an object `"o"` which stands for options.

### Table Options

| Name           | Type           | Decription     |
| :------------- | :------------- | :------------- |
| uh             | boolean        | Use header     |
