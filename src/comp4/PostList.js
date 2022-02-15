import React, { Component } from 'react'
import axios from "axios";


export default class PostList extends Component {

    state = { posts: [] }

    componentDidMount() {

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(data => this.setState({ posts: data, isLoading: false }))

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => this.setState({ posts: res.data }))

    }

    render() {
        console.log(this.state.posts)
        return (
            <div>PostList</div>
        )
    }
}
