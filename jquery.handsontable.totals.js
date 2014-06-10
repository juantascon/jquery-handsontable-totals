var handsontabletotals = {
    
    __property: "__handsontable_totals_col__",
    
    add: function(instance, cols, placeholder) {
        instance.alter("insert_row");
        var index = instance.countRows()-1;
        instance.setDataAtRowProp(index, handsontabletotals.__property, cols)
        
        if (placeholder !== "undefined") {
            instance.setDataAtRowProp(index, placeholder, "Total");
        }
    },
    
    update: function(instance) {
        $.each(instance.getData(), function(i, row) {
            var cols = row[handsontabletotals.__property];
            if (typeof(cols) !== "undefined") {
                $.each(cols, function(j, total_col) {
                    var total = handsontabletotals._col_total(instance, total_col);
                    instance.setDataAtRowProp(i, total_col, total);
                });
            }
        });
    },
    
    _col_total: function(instance, prop) {
        var total = 0;
        
        $.each(instance.getData(), function(i, row) {
            if (typeof(row[handsontabletotals.__property]) === "undefined") {
                var value = instance.getDataAtRowProp(i, prop);
                if ( $.isNumeric(value) ) {
                    total += parseInt(value);
                }
            }
        });
        
        return total;
    }
}
