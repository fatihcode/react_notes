import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser, addUser, getUser } from './actions/userAction';

export class User extends Component {
	state = { input: "" }

	render() {
		
		// console.log(this.props);
		const onUpdateUser = (e) => {
			e.preventDefault()
			this.props.updateUser(this.state.input)
			this.setState({ input: "" })
		}

		const inputChange = (e) => {
			this.setState({ input: e.target.value })
		}

		const onGetUser = () => {
			this.props.getUser()
		}

		return (
			<div>
				<h3>User Comp</h3>
				<h4>userReducer Name: {this.props.userReducer}</h4>
				<form onSubmit={onUpdateUser}>
					<input onChange={inputChange} value={this.state.input} type="text" /> <br />
					<button>Update User</button>
				</form>
				<button onClick={onGetUser}>get API</button>
			</div>
		)
	}
}

//Verileri okumak için
const mapStateToProps = (state) => {
	// console.log(state);
	return state
}

//Veri göndermek için
const mapDispatchToProps = { updateUser, addUser, getUser }

export default connect(mapStateToProps, mapDispatchToProps)(User)

// const mergeProps = (propsFromState,propsFromDispatch,propsFromOwn)=>{
//     console.log("--------------------------");
//     console.log(propsFromState);
//     console.log(propsFromDispatch);
//     console.log(propsFromOwn);
//     return{}
// }