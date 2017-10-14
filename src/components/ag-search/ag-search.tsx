import { Component, Prop, State, Method } from '@stencil/core';
// import SearchService from '../services/search.service';
import TestData from './ag-search.data'
import Fuse from 'fuse.js';
@Component({
  tag: 'ag-search',
  styleUrl: 'ag-search.scss'
})
export class AgSearch {

  @State() data: Array<any> = TestData;
  @State() results: Array<any>
  @State() fuse: Fuse;
  
  componentWillLoad(){
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

    this.fuse = new Fuse(TestData, options); // "list" is the item array
    this.results = this.fuse.search("");
  }

  debug(enable){
    return (enable)? <div>Debug: {JSON.stringify(this.results)}</div>:null;
  }

  inputHandler(e){
    this.results = this.fuse.search(e.target.value);
  }

  render() {
    return [
        <input onInput={(e: UIEvent)=>this.inputHandler(e)}/>,
        this.debug(true)
    ];
  }
}
