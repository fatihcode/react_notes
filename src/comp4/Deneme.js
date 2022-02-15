import axios from 'axios'
import React, { Component } from 'react'

export default class Deneme extends Component {
    state = { name: "" }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log("tıklandı")

        const inputName = document.getElementById("name")
        console.log(inputName.value)
        console.log(this.state)

        this.setState({ name: inputName.value })

        setTimeout(() => {
            
            console.log(this.state)
        }, 1000);


        axios.post('https://jsonplaceholder.typicode.com/users', this.state.name)
            .then(res => console.log(res))

    }

    render() {
        console.log(this.state)

        return (
            <div>

                <h3>PersonAdd</h3>
                {this.state.name}

                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">Person Name
                        <br /><input type="text" name="name" id="name" />
                    </label><br />

                    <button type="submit">Add</button>

                </form>

            </div>
        )
    }
}
