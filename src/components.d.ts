/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { AgApp as AgApp } from './components/ag-app/ag-app';

interface HTMLAgAppElement extends AgApp, HTMLElement {
}
declare var HTMLAgAppElement: {
  prototype: HTMLAgAppElement;
  new (): HTMLAgAppElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ag-app": HTMLAgAppElement;
  }
  interface ElementTagNameMap {
      "ag-app": HTMLAgAppElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ag-app": JSXElements.AgAppAttributes;
      }
  }
  namespace JSXElements {
      export interface AgAppAttributes extends HTMLAttributes {
        
      }
  }
}

import { AgSearch as AgSearch } from './components/ag-search/ag-search';

interface HTMLAgSearchElement extends AgSearch, HTMLElement {
}
declare var HTMLAgSearchElement: {
  prototype: HTMLAgSearchElement;
  new (): HTMLAgSearchElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ag-search": HTMLAgSearchElement;
  }
  interface ElementTagNameMap {
      "ag-search": HTMLAgSearchElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ag-search": JSXElements.AgSearchAttributes;
      }
  }
  namespace JSXElements {
      export interface AgSearchAttributes extends HTMLAttributes {
        
          first?: string,
          last?: string
      }
  }
}

