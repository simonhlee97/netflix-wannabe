import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'

export default function Signup() {
	const [firstName, setFirstName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const isInvalid = firstName === '' || password === '' || emailAddress === ''

	const handleSignup = (event) => {
		event.preventDefault()
		// todo: supabase.signUp()
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First Name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Email Address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>

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
