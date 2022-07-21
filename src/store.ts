import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  todoItems: [],
  clicks: 0,
  squaredClicks: 0,
});

onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

onChange('todoItems', value => {
  state.todoItems = value;
});

export default state;
