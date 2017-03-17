{% include header/template.html %}

			<a href="{{site.urls.topics | absolute_url }}{{page.collection}}">« back to overview</a><br><br>

			{% include menu_version/template.html collection=page.collection %}

			{% include page_title/template.html %}

			{% if page.code != "" %}
				{% include codeblock/template.html
					lang="JS"
					style="js"
					code=page.code
				%}
			{% endif %}

			{% include parameters/template.html parameters=page.parameters %}

			{% if page.example != "" %}
				{% include module_code_example/template.html
					code=page.example
					%}
			{% endif %}


			{% if site[ 'filters' ] %}

				{% assign sorted = site[ 'filters' ] | sort: 'order' %}
				{% assign grouped = sorted | group_by: 'slug' %}

				{% assign group = false %}

				{% for item in grouped %}

					{% assign index = item.items | size %}
					{% assign index = index | minus:1 %}

					{% assign path = item.items[index].url | remove_first: "/" | split: '/' %}
					{% assign subfolder = path[1] %}

					{% if subfolder == 'overlay' %}

						{% if group == false %}
							{% assign group = true %}

							{{ "## Filters" | markdownify }}

							<ul class="menu_topic margin-vert">
						{% endif %}

						<li {% if item.items[index].url == page.url%}class="active"{% endif %}>
							<a href="{{ item.items[index].url | absolute_url }}" >{{ item.items[index].slug }}</a>
						</li>

					{% endif %}

				{% endfor %}

				{% if group %}
					</ul>
				{% endif %}

			{% endif %}




			{{ content }}

{% include footer/template.html %}
