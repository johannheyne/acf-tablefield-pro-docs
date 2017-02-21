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
				{% for page in sorted_pages %}
					{% if page.title %}
						<li><a href="{{ page.url, | absolute_url }}" >{{ page.title }}</a></li>
					{% endif %}
				{% endfor %}
			</ul>
		</nav>

		<header>Header</header>
