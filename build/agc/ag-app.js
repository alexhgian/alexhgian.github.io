/*! Built with http://stenciljs.com */
agc.loadComponents(

/**** module id (dev mode) ****/
"ag-app",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var AgApp = /** @class */ (function () {
    function AgApp() {
    }
    AgApp.prototype.render = function () {
        return [
            h("div", { class: "box header" }, "header"),
            h("div", { class: "box sidebar" }, "sidebar"),
            h("ag-search", { class: "box content" }),
            h("div", { class: "box footer" }, "footer")
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
0 /* no members */,

/** ag-app: host **/
{}

]
)