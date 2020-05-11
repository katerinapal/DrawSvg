import Backbone from "..\\backbone.js";
import { ConnectorCoordinate } from "..\\model\\connectorcoordinate.js";

var ConnectorCoordinates = Backbone.Collection.extend({
    model: ConnectorCoordinate
});

var exported_ConnectorCoordinates = ConnectorCoordinates;
export { exported_ConnectorCoordinates as ConnectorCoordinates };