import { Component, Host, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  async componentDidLoad() {
    // const response = await fetch('/https://jsonplaceholder.typicode.com/todos/1');
    // const data = await response.json();

    // console.log(data);
    // state.todoItems = data;
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        state.todoItems = data.slice(0, 10);
      });
  }

  deleteTodoItem(id) {
    state.todoItems = state.todoItems.filter(item => item.id !== id);
    console.log(state.todoItems);
  }

  render() {
    return (
      <Host>
        <ul>
          {state.todoItems.map(item => (
            <li>
              <span>{item.title}</span>
              <button onClick={() => this.deleteTodoItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <button onClick={() => state.clicks++} class="clicks">
          Clicked: {state.clicks}
        </button>
      </Host>
    );
  }
}
