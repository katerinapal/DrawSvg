import Backbone from "..\\backbone.amd.js";
import { EndNode as Node } from "..\\model\\endnode.js";
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