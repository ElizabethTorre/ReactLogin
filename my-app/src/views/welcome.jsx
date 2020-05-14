//import React, { useState } from 'react'
//import axios from 'axios'

//export const Signup = () => {
//	const [customerSignUp, setCustomerSignUp] = useState(
//		{ email: '', password: '', firstName: '', lastName: ''}
//);

//const handleChange = (event) => {
//		setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
//}

//const handleSubmit = (e) => {
//		e.preventDefault()
//		axios.post('/api/Customer/SignUp', customerSignUp)
//			.then(function (response) {
//					console.log(response)
//			})
//			.catch(function (error) {
//					console.log(error)
//			}) 
//}
//return (
//	<div className="container">
//			<form className='white' onSubmit={handleSubmit}>
//					<h5 className="grey-text.text-darken-3">Sign Up With Email</h5>                        
//					<div className="input-field">
//							<label htmlFor="lastName">Last Name</label>
//							<input type="text" name="lastName" value={customerSignUp.lastName} onChange={handleChange} required />
//					</div>
//					<div className="input-field"> 
//							<button className="btn blue darken-3" type="submit">Sign Up</button>
//					</div>
//			</form>
//	</div>
//);
//}