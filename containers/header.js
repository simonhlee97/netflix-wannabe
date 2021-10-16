import { Header } from '../components'

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo src="/images/misc/logo.svg" alt="Netflix" />
				<Header.ButtonLink style={{ color: 'red' }} href="/signin">
					Sign In
				</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	)
}
