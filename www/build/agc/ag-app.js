/*! Built with http://stenciljs.com */
agc.loadComponents(

/**** module id (dev mode) ****/
"ag-app",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var AgApp = /** @class */ (function () {
    function AgApp() {
    }
    AgApp.prototype.componentWillLoad = function () {
        this.registerHandlers();
    };
    AgApp.prototype.registerHandlers = function () {
        var agSearchEl = this.hostElem.querySelector('ag-search');
        console.log(agSearchEl);
    };
    AgApp.prototype.render = function () {
        return [
            h("div", { class: "box header" }, "Alex's Dashboard"),
            h("ul", { class: "box sidebar" },
                h("li", null, "Built with Stencil"),
                h("li", null, "CSS Grid Layout")),
            h("ag-search", { class: "box content" }),
            h("div", { class: "box footer" }, "v0.0.1")
        ];
    };
    return AgApp;
}());

exports['AG-APP'] = AgApp;
},


/***************** ag-app *****************/
[
/** ag-app: tag **/
"AG-APP",

/** ag-app: members **/
[
  [ "hostElem", /** element ref **/ 7 ],
  [ "result", /** state **/ 5 ]
],

/** ag-app: host **/
{}

]
)