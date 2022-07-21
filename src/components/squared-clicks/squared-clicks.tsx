import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'squared-clicks',
  styleUrl: 'squared-clicks.css',
  shadow: true,
})
export class SquaredClicks {
  render() {
    return (
      <Host>
        <p>This is another component using global state</p>
        <div class="wrapper">
          <p>Squared Clicks: {state.squaredClicks}</p>
        </div>
      </Host>
    );
  }
}
