import { constants_obj as Constants } from "..\\constants.js";
import { EndNodeMixin as Node } from ".\\nodeconnectorendmixin.js";
var JoinEndNode = Node.extend({

    initialize: function(options){
        
        this.constructor.__super__.initialize.apply(this, [options]);
        
        this.set({
            fill : Constants.endNodeFillColor,
            stroke: Constants.endNodeStrokeColor
        });
        
        //listen to when the board is drawing a connector
        this.get("board").dispatcher.on("connectorStarted", function(){ 
            if(this.endConnectors.length == 0){
                this.set("highlight", true);
            };
            }, this);
        this.get("board").dispatcher.on("connectorEnded connectorCancelled", function(){ this.set("highlight", false);}, this);
    }

});

//add end node functionality
_.extend(JoinEndNode.prototype, NodeConnectorEndMixin);

return JoinEndNode;
export { exported_joinendnodejs };