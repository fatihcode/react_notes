import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)

        console.log("const work")
        console.log(props)

        this.state = {
            name: "Ahmet",
            age: 25

        }
    }

    componentWillUnmount(){

        console.log("Renderdan önce çalıştı")

    }

    componentDidMount() { 
        console.log("Renderdan sonra çalıştı")
        console.log(this.state.age)
        this.setState({age:32})
        console.log(this.state.age)
     }




     shouldComponentUpdate(nextProps, nextState) { 
         
        console.log(nextProps, nextState)
        return false
      }




    render() {
        console.log(this.props)
        console.log(this.state.age)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
