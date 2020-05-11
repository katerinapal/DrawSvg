import { NodeView } from ".\\nodeview.js";

var  EndNodeView = NodeView.extend({
    cursorUp: function(e) {
        if(this.model.get("board").connectorEnd(this.model)){
            e.stopPropagation();
            e.preventDefault();
        }
    }
});

var exported_EndNodeView = EndNodeView;
export { exported_EndNodeView as EndNodeView };
export { exported_endnodeviewjs };