import React, { Component } from 'react'

export default class UserList extends Component {

  state = { users: [], todo: [], isLoading: true }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }))
  }


  getTodoList = () => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => this.setState({ todo: data, isLoading: false }))
  }



  render() {

    console.log(this.state.users)
    const { users, todo, isLoading } = this.state

    return (
      <div>

        <h3>UserList</h3>
        {isLoading == true ? "loading..." : users.map((item, i) => { 
          return <p key={i}>{item.id}. {item.name} {item.surname}</p> })}
        <hr />

        <h3>ToDo List</h3>
        <button onClick={this.getTodoList}>todo List</button>
        {isLoading == true ? "loading..." : todo.map((item, i) => { 
          return <p key={i}>{item.id}. {item.title} {item.completed}</p> })}
        <hr />
      </div>
    )
  }
}
