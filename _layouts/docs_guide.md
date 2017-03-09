{% include header/template.html %}

			<a href="{{site.urls.topics | absolute_url }}{{page.collection}}">« back to overview</a><br><br>

			{% include menu_version/template.html %}

			{% include page_title/template.html %}

			{% include codeblock/template.html
				lang="JS"
				style="js"
				code=page.code
			%}

			{% include parameters/template.html %}

			{{ content }}

{% include footer/template.html %}
