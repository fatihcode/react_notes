import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser, addUser } from './actions/userAction';

export class User extends Component {
	render() {
		console.log(this.props);

		const onUpdateUser = () => {
			this.props.updateUser("Ertan")
		}

		return (
			<div>
				<h3>User Comp</h3>
				<h4>userReducer Name: {this.props.userReducer}</h4>

				<button onClick={onUpdateUser}>Update User</button>

			</div>
		)
	}
}

//Verileri okumak için
const mapStateToProps = (state) => {
	console.log(state);
	return state
}

//Veri göndermek için
const mapDispatchToProps = { updateUser, addUser }

// const mergeProps = (propsFromState,propsFromDispatch,propsFromOwn)=>{
//     console.log("--------------------------");
//     console.log(propsFromState);
//     console.log(propsFromDispatch);
//     console.log(propsFromOwn);
//     return{}
// }

export default connect(mapStateToProps, mapDispatchToProps)(User)