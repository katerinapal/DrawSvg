import Backbone from "..\\backbone-min.js";
import { ConnectorCoordinates as Connector } from ".\\connectorcoordinates.js";

var Connectors = Backbone.Collection.extend({
    model: Connector,
    
    destroyAll: function(){
        while(this.length > 0){
            this.at(0).destroy();
        }
    }
});

var exported_Connectors = Connectors;
export { exported_Connectors as Connectors };