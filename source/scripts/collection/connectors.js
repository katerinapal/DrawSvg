import Backbone from "..\\backbone.amd.js";
import { ConnectorCoordinate as Connector } from "..\\model\\connectorcoordinate.js";

var Connectors = Backbone.Collection.extend({
    model: Connector,
    
    destroyAll: function(){
        while(this.length > 0){
            this.at(0).destroy();
        }
    }
});

return Connectors;