import _ from "..\\underscore.amd.js";
import { StartNodeMixin as NodeConnectorStartMixin } from ".\\nodeconnectorstartmixin.js";
import { EndNode as Node } from ".\\endnode.js";
var JoinStartNode = Node.extend();

//add start node functionality
_.extend(JoinStartNode.prototype, NodeConnectorStartMixin);

return JoinStartNode;