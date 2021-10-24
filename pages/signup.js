import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import Link from 'next/link'
import { useRouter } from 'next/router'

//import { useAuth } from '../hooks/useAuth'
//import { useSignUp } from 'react-supabase'

export default function Signup() {
	const { session, user } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	// destructure signUp function from the Auth Context
	const { signUp } = useAuth()
	const { push } = useRouter()

	async function handleSubmit(e) {
		e.preventDefault()

		// Call `signUp` function from the context
		const { error } = await signUp([email, password])

		if (error) {
			console.log(error)
		}
		if (!error) push('/browse')
	}

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>

					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSubmit} method="POST">
						<Form.Input
							placeholder="email"
							id="input-email"
							autoComplete="off"
							type="email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>

						<Form.Input
							placeholder="password"
							id="input-password"
							autoComplete="off"
							type="password"
							name={password}
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>

						<br />

						<Form.Submit type="submit">Sign Up</Form.Submit>
					</Form.Base>

					<br />

					<p>
						Already have an account? <Link href="/signin">Sign In</Link>
					</p>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}

// import { useState } from 'react'
// import { FooterContainer } from '../containers/footer'
// import { HeaderContainer } from '../containers/header'
// import { Form } from '../components'

// export default function Signup() {
// 	const [firstName, setFirstName] = useState('')
// 	const [emailAddress, setEmailAddress] = useState('')
// 	const [password, setPassword] = useState('')
// 	const [error, setError] = useState('')

// 	const isInvalid = firstName === '' || password === '' || emailAddress === ''

// 	const handleSignup = (event) => {
// 		event.preventDefault()
// 		// todo: supabase.signUp()
// 	}

// 	return (
// 		<>
// 			<HeaderContainer>
// 				<Form>
// 					<Form.Title>Sign Up</Form.Title>
// 					{error && <Form.Error>{error}</Form.Error>}

// 					<Form.Base onSubmit={handleSignup} method="POST">
// 						<Form.Input
// 							placeholder="First Name"
// 							value={firstName}
// 							onChange={({ target }) => setFirstName(target.value)}
// 						/>
// 						<Form.Input
// 							placeholder="Email Address"
// 							value={emailAddress}
// 							onChange={({ target }) => setEmailAddress(target.value)}
// 						/>
// 						<Form.Input
// 							type="password"
// 							value={password}
// 							autoComplete="off"
// 							placeholder="Password"
// 							onChange={({ target }) => setPassword(target.value)}
// 						/>
// 						<Form.Submit disabled={isInvalid} type="submit">
// 							Sign Up
// 						</Form.Submit>

// 						<Form.Text>
// 							Already a user? <Form.MyLink href="/signin">Log in now.</Form.MyLink>
// 						</Form.Text>
// 						<Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>
// 					</Form.Base>
// 				</Form>
// 			</HeaderContainer>
// 			<FooterContainer />
// 		</>
// 	)
// }
