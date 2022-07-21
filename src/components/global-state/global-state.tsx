import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'global-state',
  shadow: true,
})
export class GlobalState {
  render() {
    return (
      <Host>
        <h1>Global state in JSON</h1>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Host>
    );
  }
}
