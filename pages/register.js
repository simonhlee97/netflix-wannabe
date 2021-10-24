import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import Router from 'next/router'
// import useAuth Hook
import { useAuth } from '../context/Auth'

export default function Register() {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const { signUp } = useAuth()

	const handleSignup = async () => {
		try {
			setLoading(true)
			const { error } = await signUp({ email, password })
			if (error) throw error
		} catch (error) {
		} finally {
			setLoading(false)
			Router.push('/browse')
		}
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Register</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base method="POST">
						<div>{error && JSON.stringify(error)}</div>
						<Form.Input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="Email Address"
						/>

						<Form.Input
							type="password"
							name="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="off"
							placeholder="Password"
						/>
						<Form.Submit
							type="submit"
							onClick={(e) => {
								e.preventDefault()
								handleSignup(email, password)
							}}
							isLoading={loading}>
							Register
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
