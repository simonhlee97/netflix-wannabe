import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import Router from 'next/router'
// import useAuth Hook
// import { useAuth } from '../context/Auth'

export default function Register() {
	const [error, setError] = useState('')
	// const router = useRouter()
	const registerUser = async (event) => {
		event.preventDefault()
		// call default function in pages/api/register
		// send the email and password from form submission event to that endpoint
		const res = await fetch('/api/register', {
			body: JSON.stringify({
				email: event.target.email.value,
				password: event.target.password.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
		const { user } = await res.json()
		// if (user) Router.push(`/welcome?email${user.email}`)
		if (user) Router.push('/browse')
	}

	// const emailRef = useRef()
	// const passwordRef = useRef()
	// const [error, setError] = useState('')

	//const isInvalid = passwordRef === '' || emailRef

	// Get signUp function from the auth context
	// const { signUp } = useAuth()

	// async function handleSubmit(e) {
	// 	e.preventDefault()
	// 	const email = emailRef.current.value
	// 	const password = passwordRef.current.value
	// 	const { error } = await signUp({ email, password })
	// 	if (error) {
	// 		alert('error signing in')
	// 	} else {
	// 		Router.push('/browse')
	// 	}
	// }

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Register</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={registerUser} method="POST">
						<label htmlFor="email">Email</label>
						<Form.Input id="email" name="email" required placeholder="Email Address" />

						<label htmlFor="password">Password</label>
						<Form.Input
							type="password"
							name="password"
							required
							autoComplete="off"
							placeholder="Password"
						/>
						<Form.Submit type="submit">Register</Form.Submit>

						<Form.Text>
							Already a user? <Form.MyLink href="/signin">Log in now.</Form.MyLink>
						</Form.Text>
						<Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}
