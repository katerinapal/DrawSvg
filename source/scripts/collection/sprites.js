import Backbone from "..\\backbone.js";
import { Sprite } from "..\\model\\sprite.js";

var Sprites = Backbone.Collection.extend({
    model: Sprite,
    
    destroyAll: function(){
        while(this.length > 0){
            this.at(0).destroy();
        }
    }
});

var exported_Sprites = Sprites;
export { exported_Sprites as Sprites };