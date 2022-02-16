import axios from 'axios'
import React, { Component } from 'react'

export default class PersonAdd extends Component {
    state = { name: "" }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("tıklandı")
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
            .then(res => console.log(res))
    }
    handlechange = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {

        return (
            <div>

                <h3>PersonAdd</h3>

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">Person Name :
                        <br />
                        <input type="text" name="name" id="name"
                            onChange={this.handlechange}
                            value={this.state.name}
                        />
                    </label><br />
                    <button type="submit">Add</button>

                </form>
                <hr />
            </div>
        )
    }
}
