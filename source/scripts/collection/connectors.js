import Backbone from "..\\backbone.js";
import { EndNodeMixin as Connector } from "..\\model\\nodeconnectorendmixin.js";

var Connectors = Backbone.Collection.extend({
    model: Connector,
    
    destroyAll: function(){
        while(this.length > 0){
            this.at(0).destroy();
        }
    }
});

return Connectors;