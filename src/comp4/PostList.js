import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {
    state = { posts: [], getir: true }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => this.setState({ posts: res.data }))
    }

    render() {

        const onClick = () => this.setState({ getir: !this.state.getir })

        return (
            <div>
                <h3>PostList</h3>
                <button onClick={onClick}>Getir</button>
                {this.state.getir ? <p>loading...</p> : this.state.posts.map((item, i) => <p key={i}>{item.title}</p>)}

                <hr />

            </div>
        )
    }
}
