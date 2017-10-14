/*! Built with http://stenciljs.com */
agc.loadComponents(

/**** module id (dev mode) ****/
"ag-debug",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var AgApp = /** @class */ (function () {
    function AgApp() {
    }
    AgApp.prototype.componentWillLoad = function () {
        console.log('ag-debug ld', this.value);
    };
    AgApp.prototype.componentWillUpdate = function () {
        console.log('ag-debug up', this.value);
    };
    // let agSearchEl = this.hostElem.querySelector('ag-search');
    // console.log(agSearchEl)
    AgApp.prototype.processData = function () {
        if (Array.isArray(this.value)) {
            var elmArr_1 = [];
            this.value.forEach(function (val) {
                elmArr_1.push(h("div", null, JSON.stringify(val)));
            });
            return elmArr_1;
        }
        else {
            return JSON.stringify(this.value);
        }
    };
    AgApp.prototype.render = function () {
        return this.processData();
    };
    return AgApp;
}());

exports['AG-DEBUG'] = AgApp;
},


/***************** ag-debug *****************/
[
/** ag-debug: tag **/
"AG-DEBUG",

/** ag-debug: members **/
[
  [ "hostElem", /** element ref **/ 7 ],
  [ "value", /** prop **/ 1 ]
],

/** ag-debug: host **/
{}

]
)