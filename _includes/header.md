<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>{{ page.title }}</title>
	<link href="{{ "/css/main.css" | absolute_url }}" rel="stylesheet">
</head>
<body>

	<div class="container">

		<nav>
			<ul>
				{% assign sorted_pages = (site.pages | sort: 'order') %}
				{% for item in sorted_pages %}
					{% if item.title %}
						<li {% if item.url == page.url %}class="active"{% endif %}><a href="{{ item.url, | absolute_url }}" >{{ item.title }}</a></li>
					{% endif %}
				{% endfor %}
			</ul>
		</nav>

		<header>Header</header>
