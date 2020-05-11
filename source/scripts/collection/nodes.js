import Backbone from "..\\backbone.js";
import { EndNodeMixin as Node } from "..\\model\\nodeconnectorendmixin.js";
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