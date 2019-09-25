---
title: Span
layout: page
---

## Basic functionalities

* <input type="checkbox" checked readonly>
	**Add field_settings**

* <input type="checkbox" checked readonly>
	**Add tab**

* <input type="checkbox" checked readonly>
	**Add col and row select fields**

* <input type="checkbox" checked readonly>
	**Set colspan and rowspan select options**

	* <input type="checkbox" checked readonly>
		**Involve collisions with other colspans and rowspans**

		* <input type="checkbox" checked readonly>
			**Set state of amount of cols and rows**
			<br>Because collision detecting of colspan and rowspan depends of the value of each other.

		* <input type="checkbox" checked readonly>
			**Enables state vars colspan_value, rowspan_value**

		* <input type="checkbox" checked readonly>
			**Update colspan_value, rowspan_value on field change**

* <input type="checkbox" readonly>
	**Add and remove cols and rows**
	- Adding columns and rows does not affect span
	- <input type="checkbox" checked readonly> **Removing a column** must be prevented when the column traverses a colspan cell whose colspan extends beyond the last column.
	- <input type="checkbox" checked readonly> **Removing a column** must be prevented when all cells belongs to an colspan.
	- <input type="checkbox" checked readonly>Table data must updated by 'hs' (has Span)
	- <input type="checkbox" checked readonly>Table class "span-hide" must updated.
	- <input type="checkbox"> **Removing a row** must be prevented when the row traverses a rowspan cell whose rowspan extends beyond the last row.
* <input type="checkbox" readonly>
	**Sort cols and rows**
	- Prevent collisions with other colspans and rowspans
	- On/Off sorting items: <a href="http://jqueryui.com/sortable/#items">http://jqueryui.com/sortable/#items</a>
	- <input type="checkbox" readonly> Group rows and cols before a col or row sort starts like in OSX Numbers.

## Potential functionalities

* <input type="checkbox" readonly>
	**Elastic Span**
	- Adds an bolean checkbox to colspan and rowspan enabling elastic span behavior
	- This causes dynamically changing the span amount on adding and removing cols and rows within a span

* <input type="checkbox" readonly>
	**Total Span**
	- Adds an bolean checkbox to colspan and rowspan enabling total span behavior
	- This causes a span to span dynamically all cols or rows within a table section
