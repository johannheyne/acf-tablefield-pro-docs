---
title: Filters
topic: filters
layout: page
---

# Filters

{% include topic_menu.html %}

## Add a filter

{% include codeblock.html
lang="JS"
style="js"
code="ACFTableField.core.add_filter( scope, filterslug, handler );"
%}

### Example of adding a filter in a module

{% include codeblock.html
lang="JS"
style="js"
code="jQuery.noConflict();
jQuery( document ).ready( function( $ ){

	function ACFTableFieldMyModule() {

		var t = this;

		t.init = function( p ) {

			ACFTableField.core.add_filter( 'main', 'data_defaults', t.add_default_data );

		};

		t.add_default_data = function( default_data ) {

			// add your default data
			default_data.p.o.myoption = 'default data';

			return default_data;
		}

	};

	ACFTableField.mymodule = new ACFTableFieldMyModule();

});"
%}
