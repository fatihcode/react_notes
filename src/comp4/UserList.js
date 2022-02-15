import React, { Component } from 'react'

export default class UserList extends Component {

  state = { users: [], isLoading: true }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoading: false }))
  }

  render() {

    console.log(this.state.users)
    const { users, isLoading } = this.state

    return (
      <div>

        <h3>UserList</h3>
        {isLoading === true ? "loading..." : users.map((item, i) => {
          return <p key={i}>{item.id}. {item.name} {item.surname}</p>
        })}
        <hr />

      </div>
    )
  }
}
