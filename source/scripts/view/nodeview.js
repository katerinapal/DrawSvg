import Backbone from "..\\backbone.amd.js";
import $ from "..\\jquery-1.7.2.min.js";
import { constants_obj as Constants } from "..\\constants.js";

var NodeView = Backbone.View.extend({
    
    initialize: function(options) {
        this.shape = this.model.get("board").paper.circle();
        this.shape.attr({fill: this.model.get("fill"), stroke: this.model.get("stroke"), "stroke-width": this.model.get("stroke-width")})
        this.el = this.shape.node;
        this.$el = $(this.shape.node);
        
        this.model.on("change:highlight", this.toggleHighlight, this);
        this.model.on("destroy", this.destroyed, this);
        
        this.render();
    },

    events: {
        "mousedown": "cursorDown",
        "touchstart": "cursorDown",
        "mouseup": "cursorUp"
    },

    cursorDown: function(e) {
        //override to handle mousedown and touchstart events
    },

    cursorUp: function(e) {
        //override to handle mouseup event
    },

    render: function() {
        this.shape.attr({
            cx: this.model.get("x"),
            cy: this.model.get("y"),
            r: this.model.get("r")
        });

        this.shape.node.id = this.model.get("nodeId");
        
        this.glow = this.shape.glow({
            color: Constants.nodeHighlightColor,
            width: 50
            }).hide();
            
        return this;
    },
    
    toggleHighlight: function(model){
        if(model.get("highlight")){
            this.glow.show();
        }
        else{
            this.glow.hide();
        }
    },
    
    destroyed: function(){
        
        this.glow.remove();
        this.remove();
    }
});

var exported_NodeView = NodeView;
export { exported_NodeView as NodeView };