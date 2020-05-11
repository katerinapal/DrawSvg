import { NodeView } from ".\\nodeview.js";

var StartNodeView = NodeView.extend({
    cursorDown: function(e) {
        this.model.get("board").connectorStart(this.model);
    }
});

var exported_StartNodeView = StartNodeView;
export { exported_StartNodeView as StartNodeView };
export { exported_startnodeviewjs };