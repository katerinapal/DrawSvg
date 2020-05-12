import Backbone from "..\\backbone-min.js";
import $ from "..\\jquery-1.7.2.min.js";

var StartButtonView = Backbone.View.extend({
    initialize: function(options) {
        this.shape = options.board.paper.rect(), this.el = this.shape.node, this.$el = $(this.shape.node), this.delegateEvents(this.events);
        this.render();
    },

    events: {
        "click": "click",
        "touchstart": "click"
    },

    click: function(e) {
        this.options.board.start();
    },

    render: function() {
        this.shape.attr({
            x: 500,
            y: 10,
            width: 50,
            height: 50,
            fill: "green"
        });
        return this;
    }
});

var exported_StartButtonView = StartButtonView;
export { exported_StartButtonView as StartButtonView };