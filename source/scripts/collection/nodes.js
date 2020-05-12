import Backbone from "..\\backbone-min.js";
import { JoinEndNodeView as Node } from "..\\view\\joinendnodeview.js";
var Nodes = Backbone.Collection.extend({
    model: Node,
    
    destroyAll: function(){
        while(this.length > 0){
            this.at(0).destroy();
        }
    }
});

var exported_Nodes = Nodes;
export { exported_Nodes as Nodes };