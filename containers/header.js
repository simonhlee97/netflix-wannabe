import { Header } from '../components'
import Link from 'next/link'

export function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Link href="/">
					<Header.Logo href="/" src="/images/misc/logo.svg" alt="Netflix" />
				</Link>
				<Header.ButtonLink style={{ color: 'red' }} href="/signin">
					Sign In
				</Header.ButtonLink>
			</Header.Frame>
			{children}
		</Header>
	)
}
