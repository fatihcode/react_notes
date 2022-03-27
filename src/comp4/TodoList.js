import React, { Component } from 'react'

export default class TodoList extends Component {

  state = { todo: [], isLoading: true }

  getTodoList = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({ todo: data, isLoading: false }))
  }

  render() {

    const { todo, isLoading } = this.state

    return (
      <div>

        <h3>ToDo List</h3>
        <button onClick={this.getTodoList}>todo List</button>
        {isLoading === true ? <p>loading...</p>: todo.map((item, i) => {
          return <p key={i}>{item.id}. {item.title} {item.completed}</p>
        })}
        <hr />
      </div>
    )
  }
}