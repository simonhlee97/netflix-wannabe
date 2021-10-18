import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import Router from 'next/router'

export default function Signin() {
	const [error, setError] = useState('')
	// const router = useRouter()
	const loginUser = async (event) => {
		event.preventDefault()
		// call default function in pages/api/register
		// send the email and password from form submission event to that endpoint
		const res = await fetch('/api/login', {
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

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={loginUser} method="POST">
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
						<Form.Submit type="submit">Log in</Form.Submit>

						<Form.Text>
							Need to register? <Form.MyLink href="/signup">Sign up</Form.MyLink>
						</Form.Text>
						<Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}
