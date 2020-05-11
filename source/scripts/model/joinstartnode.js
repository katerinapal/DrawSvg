import _ from "..\\underscore.js";
import { StartNodeMixin as NodeConnectorStartMixin } from ".\\nodeconnectorstartmixin.js";
import { EndNodeMixin as Node } from ".\\nodeconnectorendmixin.js";
var JoinStartNode = Node.extend();

//add start node functionality
_.extend(JoinStartNode.prototype, NodeConnectorStartMixin);

return JoinStartNode;
export { exported_joinstartnodejs };