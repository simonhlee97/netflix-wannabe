import { Footer } from '../components'

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link href="/about">About This Project</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Investor Relations
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Ways to Watch
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Corporate Information
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Netflix Originals
					</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#" className="disabled-link">
						Help Centre
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Jobs
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Terms of Use
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Contact Us
					</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#" className="disabled-link">
						Account
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Reedem gift cards
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Priacy
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Speed Test
					</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href="#" className="disabled-link">
						Media Centre
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Buy gift cards
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Cookie Preferences
					</Footer.Link>
					<Footer.Link href="#" className="disabled-link">
						Legal Notices
					</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />
			<Footer.Text>Netflix United States</Footer.Text>
		</Footer>
	)
}
