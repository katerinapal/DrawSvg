import _ from "..\\underscore.js";
import { StartNodeMixin as NodeConnectorStartMixin } from ".\\nodeconnectorstartmixin.js";
import { JoinEndNodeView as Node } from "..\\view\\joinendnodeview.js";
var JoinStartNode = Node.extend();

//add start node functionality
_.extend(JoinStartNode.prototype, NodeConnectorStartMixin);

return JoinStartNode;