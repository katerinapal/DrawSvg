import { JoinEndNodeView as NodeView } from ".\\joinendnodeview.js";

var StartNodeView = NodeView.extend({
    cursorDown: function(e) {
        this.model.get("board").connectorStart(this.model);
    }
});

var exported_StartNodeView = StartNodeView;
export { exported_StartNodeView as StartNodeView };