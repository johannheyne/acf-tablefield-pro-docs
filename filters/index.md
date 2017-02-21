---
title:  "Filters"
layout: page
order: 20
---
# The Filters

	{% for item in site.filters %}
		<h3>{{item.content}}<h3>
		<pre>{{ item | jsonify }}</pre>
	{% endfor %}
