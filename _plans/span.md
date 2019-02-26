---
title: Span
layout: page
---
<div class="invisible-list"></div>

* <input type="checkbox" checked readonly>
	**Add field_settings**

* <input type="checkbox" checked readonly>
	**Add tab**

* <input type="checkbox" checked readonly>
	**Add col and row select fields**

* <input type="checkbox" checked readonly>
	**Set colspan and rowspan select options**

	* <input type="checkbox" readonly>
		**Involve collisions with other colspans and rowspans**
		<br>BUG: A cell below another cell with colspan in same column has no options in colspan select field.
		<br>(See repository "playground" brunch "tests/collisions")

		* <input type="checkbox" checked readonly>
			**Set state of amount of cols and rows**
			<br>Because collision detecting of colspan and rowspan depends of the value of each other.

		* <input type="checkbox" checked readonly>
			**Enables state vars colspan_value, rowspan_value**

		* <input type="checkbox" checked readonly>
			**Update colspan_value, rowspan_value on field change**

* <input type="checkbox" readonly>
	**Add and remove cols and rows**
	<br>Consider spans

* <input type="checkbox" readonly>
	**Sort cols and rows**
	<br>Prevent collisions with other colspans and rowspans
	<br>On/Off sorting items: <a href="http://jqueryui.com/sortable/#items">http://jqueryui.com/sortable/#items</a>
	* <input type="checkbox" readonly> Group rows and cols before a col or row sort starts like in OSX Numbers.
