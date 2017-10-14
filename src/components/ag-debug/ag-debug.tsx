import { Component, Prop, State, Element } from '@stencil/core';
@Component({
  tag: 'ag-debug',
  styleUrl: 'ag-debug.scss'
})
export class AgApp {
  @Element() hostElem: HTMLElement;
  @Prop() value: any;

  componentWillLoad(){
    console.log('ag-debug ld', this.value)
  }
  
  componentWillUpdate(){
    console.log('ag-debug up', this.value)
  
  }
  // let agSearchEl = this.hostElem.querySelector('ag-search');
  // console.log(agSearchEl)
  processData(){
    if(Array.isArray(this.value)){
      let elmArr = [];
      this.value.forEach(val => {
        elmArr.push(<div>{JSON.stringify(val)}</div>)
      });
      return elmArr;
    } else {
      return JSON.stringify(this.value)
    }
  }

  render() {
    return this.processData();
  }
}
