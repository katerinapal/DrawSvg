import Backbone from "..\\backbone-min.js";
import _ from "..\\underscore.js";
import { boardview_obj as BoardView } from "..\\view\\boardview.js";

var AppRouter = Backbone.Router.extend({
    
    initialize: function(){
        
    },
    
    routes: {
        "level/:id": "loadLevel",
        "*actions": "defaultRoute"
    },
    
    defaultRoute: function( actions ){
        //just load the first level by default
        this.loadLevel(0);
    },
    
    loadLevel: function(levelNo){
        var self = this;
        
        var levelModule = "level" + levelNo;
        
        BoardView.load(arrangement, levelNo);
    }
});

// Instantiate the router
var app_router = new AppRouter;

//extend Backbone views so we can navigate from the view
Backbone.View.prototype.navigate = function (loc) {
  app_router.navigate(loc, true);
};

// Start Backbone history a neccesary step for bookmarkable URL's
Backbone.history.start();

var returnedValue = app_router;
export { exported_approuterjs };