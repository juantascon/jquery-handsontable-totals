## About:

jquery-handsontable-totals is a tool to add a totals row on a handsontable.

## Example:

Include the js file right after handsontable.js and before handsontable.css, example:

``` html
...

<script src="js/jquery.handsontable.full.js"></script>
<script src="js/jquery.handsontable.totals.js"></script>
<link rel="stylesheet" media="screen" href="css/jquery.handsontable.full.css">

...
```

On js create a handsontable with some data (visit the [handsontable docs](https://github.com/warpech/jquery-handsontable/wiki/Options#constructor-options) for more info):

``` javascript
$("#table").handsontable({
    ...
    columns: [
            {data: "id", readOnly: true},
            {data: "departament", readOnly: true},
            {data: "init-value", type: 'numeric', format: '$0,0', readOnly: true}
            {data: "end-value", type: 'numeric', format: '$0,0', readOnly: true}
        ]
    ...
});
var instance = $("#table").handsontable('getInstance');
```

You could now add a new total on the columns init-value and end-value, add it again if you call loadData(),
the second parameter is an array of the columns to totalize, the third parameter is a column where the word "Total" will be inserted.

``` javascript
instance.loadData(...);

handsontabletotals.add(instance, ["init-value", "end-value"], "id");
```

Run update() every time the data changes, because our table is readonly we should call it only once:

``` javascript
handsontabletotals.update(instance);
```
