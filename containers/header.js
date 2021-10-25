import { Header } from '../components'
import Link from 'next/link'

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo href="/" src="/images/misc/logo.svg" alt="Netflix" />
				<Link href="/signin">Sign In</Link>
			</Header.Frame>
			{children}
		</Header>
	)
}
