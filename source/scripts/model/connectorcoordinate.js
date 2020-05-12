import Backbone from "..\\backbone-min.js";
var ConnectorCoordinate = Backbone.Model.extend({
    defaults: {
        x: null,
        y: null
    }
});

var exported_ConnectorCoordinate = ConnectorCoordinate;
export { exported_ConnectorCoordinate as ConnectorCoordinate };