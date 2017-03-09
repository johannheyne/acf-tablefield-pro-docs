---
title: Docs Guide
topic: docs_guide
layout: page
---

This guide is written in Jekyll and can be used as a GitHub page.

## Structure

The basic guide structure are topics as a Jekyll collection `_topics`.

A topic can have a related collection named equal to the topic item `page.topic` variable.

If there is a related collection to the topic, you can embed a topic sub menu reflecting the related collection entries {% include codeinline/template.html code="{0/0 include menu_topic/template.html 0/0}" %}

{% capture code %}
---
title: <topic-title>
topic: <topic-slug>
layout: page
---

{0/0 include menu_topic/template.html 0/0}

{% endcapture %}

{% include codeblock/template.html
title="_topics/mytopic.md"
lang="markdown"
style="html"
code=code
%}

The collection folder structur begins with a `group`, then `item-slug` as an indentifier, and then versions like `1.html`.

{% capture code %}
_<topic-slug>/
	<group-name>/
		<item-slug>/
			1.html // version 1
			2.html // version 2

{% endcapture %}

{% include codeblock/template.html
title="Collection folder structure"
style="html"
code=code
%}

{% capture code %}
---
title: <title>
layout: <layout>
script: <group>
slug: <item-slug>
version: <version>
---
{% endcapture %}

{% include codeblock/template.html
title="1.html"
style="html"
code=code
%}
