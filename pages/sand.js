import { createContext, useContext, useState } from 'react'

let ToggleContext = createContext()

export default function Sand({ children }) {
	const [toggleShow, setToggleShow] = useState(true)

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Hero>{toggleShow ? <LoginForm /> : <SignupForm />}</Hero>
		</ToggleContext.Provider>
	)
}

function Hero({ children }) {
	return (
		<div className="hero">
			<div className="hero-image">
				<div className="hero-text">{children}</div>
			</div>
		</div>
	)
}
function LoginForm() {
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	return (
		<div>
			<h1>Log in Form</h1>
			<form>
				<input type="email" placeholder="Please Log in with email" />
				<input type="password" />
				<button>Log in</button>
			</form>
			<a href="#" onClick={() => setToggleShow(!toggleShow)}>
				Need to Sign Up?
			</a>
		</div>
	)
}
function SignupForm() {
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	return (
		<div>
			<h1>Sign Up Form</h1>
			<form>
				<input type="email" placeholder="Please sign up with email" />
				<input type="password" />
				<button>Sign up</button>
			</form>
			<a href="#" onClick={() => setToggleShow(!toggleShow)}>
				Logging in?
			</a>
		</div>
	)
}
