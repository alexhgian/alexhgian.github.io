import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'ag-app',
  styleUrl: 'ag-app.scss'
})
export class AgApp {
  render() {
    return [
      <div class="box header">header</div>,
      <div class="box sidebar">sidebar</div>,
      <ag-search class="box content"></ag-search>,
      <div class="box footer">footer</div>
    ];
  }
}
