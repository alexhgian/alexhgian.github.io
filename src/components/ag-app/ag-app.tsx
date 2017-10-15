import { Component, Prop, State, Element } from '@stencil/core';
// import SearchService from '../services/search.service';
@Component({
  tag: 'ag-app',
  styleUrl: 'ag-app.scss'
})
export class AgApp {
  @Element() hostElem: HTMLElement;
  @State() result: string;

  componentWillLoad(){
    this.registerHandlers();
  }

  registerHandlers(){
    let agSearchEl = this.hostElem.querySelector('ag-search');
    console.log(agSearchEl)
  }

  render() {
    return [
      <div class="box header">
        Demo Dashboard
      </div>,  
      <ul class="box sidebar">
        <li>Built with Stencil</li>
        <li>CSS Grid Layout</li>
      </ul>,
      <ag-search class="box content"></ag-search>,
      <div class="box footer">v0.0.1</div>
    ];
  }
}
