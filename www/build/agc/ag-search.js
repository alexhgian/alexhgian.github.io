/*! Built with http://stenciljs.com */
agc.loadComponents(

/**** module id (dev mode) ****/
"ag-search",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var TestData = [{
        practiceName: 'Garnet Eyecare',
        locations: [{
                zip: 92126,
                state: 'CA'
            }],
        doctors: [{
                firstName: 'Daniel',
                lastName: 'Eisenberger'
            }]
    }, {
        practiceName: 'Pacific Beach Eyecare',
        locations: [{
                zip: 12345,
                state: 'TX'
            }],
        doctors: [{
                firstName: 'Niklas',
                lastName: 'Sletteland'
            }]
    }, {
        practiceName: 'Mire Mesa Eyecare',
        locations: [{
                zip: 90650,
                state: 'CA'
            }],
        doctors: [{
                firstName: 'Alex',
                lastName: 'Gian'
            }]
    }];

var AgSearch = /** @class */ (function () {
    function AgSearch() {
        this.data = TestData;
    }
    AgSearch.prototype.componentWillLoad = function () {
        var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "practiceName",
                "subDomain",
                "doctors.firstName",
                "doctors.lastName",
                "locations.name",
                "locations.zip"
            ]
        };
        // console.log(TestData);
        this.fuse = new Fuse(TestData, options); // "list" is the item array
        this.results = this.fuse.search("");
    };
    AgSearch.prototype.debug = function (enable) {
        return (enable) ? h("div", null,
            "Debug: ",
            JSON.stringify(this.results)) : null;
    };
    AgSearch.prototype.inputHandler = function (e) {
        this.results = this.fuse.search(e.target.value);
        // console.log(this.results)
    };
    AgSearch.prototype.render = function () {
        var _this = this;
        return [
            h("input", { onInput: function (e) { return _this.inputHandler(e); } }),
            this.debug(true)
        ];
    };
    return AgSearch;
}());

exports['AG-SEARCH'] = AgSearch;
},


/***************** ag-search *****************/
[
/** ag-search: tag **/
"AG-SEARCH",

/** ag-search: members **/
[
  [ "data", /** state **/ 5 ],
  [ "first", /** prop **/ 1, /** type string **/ 1 ],
  [ "fuse", /** state **/ 5 ],
  [ "last", /** prop **/ 1, /** type string **/ 1 ],
  [ "results", /** state **/ 5 ]
],

/** ag-search: host **/
{}

]
)