import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Admin from '../img/image/administrador.png';
import Logo from '../img/logo/combined-shape.png';

//import '../css/App.css';
import '../css/login.css';
import axios from 'axios';

export const Login = () => {

	const [state, setState] = useState('password')
	const [icon, setIcon] = useState('fa fa-eye')
	
	const [login, setLogin] = useState(
		{ email: 'jpacheco@muy3o2c.com',
			password: 'password',
			grant_type: 'password',
			client_id: 'futi',
			client_secret: 'winmorefuti'
		}
	);

	const handleChange = (event) => {
			setLogin({...login, [event.target.name]: event.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://futi-dev-lb-2118413634.us-west-2.elb.amazonaws.com/futi/v1.0/login/internal', login)
			.then(function (response) {
					console.log(response)
			})
			.catch(function (error) {
					console.log(error)
			})
	}
	
	return (
		<main>
			<form id="screen-login" className="flex-form">
				<figure>
					<img src={Logo} alt="logo de la web"/>
				</figure>
				
				<p className="welcome"> ¡Bienvenido!</p>
				<p className="welcome-description">Ingresa a tu cuenta</p>
				
				<input className="inputs" type="email" name="correo" id="email" placeholder="Correo" defaultValue={login.email} onChange={handleChange}/>
				<div className="input-pass">
					{/*fa fa-eye-slash*/}
					<i
						className={icon}
						aria-hidden="true"
						onClick={() => {
							state === 'text' ? (setState('password')? setIcon('fa fa-eye-slash'):setIcon('fa fa-eye')) : (setState('text')? setIcon('fa fa-eye'):setIcon('fa fa-eye-slash'));
						}}
					/>
					<input className="inputs" type={state} name="contrasena" id="password"  placeholder="Contraseña" defaultValue={login.password} onChange={handleChange}/>
				</div>
				<button className= "btn-login" name="button" type="submit" id="login" onSubmit={handleSubmit}>Ingresar</button>
				<section className="text-bottom">
					<div>
						<input type="checkbox" id="recordar" name="recordar" />
						<label htmlFor="recordar"> Recordarme</label>
					</div>
					<label className="lost">¿Olvidaste tu contraseña?</label>
				</section>	
			</form>
			<figure className="figure-admin">
				<img src={ Admin } alt="imagen de administrador" className="logo-admin" />
			</figure>
		</main>
	);
};