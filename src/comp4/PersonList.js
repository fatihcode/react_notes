import React, { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component {

    state = { persons: [], error: null }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({ persons: res.data }))
            .catch(err => this.setState({ error: err }))
    }
    render() {
        const viewData = <ul>
            {this.state.persons.length > 0 ?
                this.state.persons.map(item => <li key={item.id}>{item.name}</li>) : null}
        </ul>

        const errData = <h3>"Apı yok"</h3>
        // const { persons } = this.state

        return (
            <div>
                <h3>PersonList</h3>

                {this.state.error ? { errData } : viewData}

                <hr />
            </div>
        )
    }
}
