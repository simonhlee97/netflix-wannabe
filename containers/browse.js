import { useState, useEffect, useContext } from 'react'
import { Header, Loading, Card } from '../components'
import Link from 'next/link'
import Fuse from 'fuse.js'
// import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

export function BrowseContainer({ slides }) {
	const [category, setCategory] = useState('series')
	const [profile, setProfile] = useState({})
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')
	// const [slideRows, setSlideRows] = useState([])

	// const { firebase } = useContext(FirebaseContext);

	const user = {
		displayName: 'Tester',
		photoURL: '1',
	}

	const dumb = [
		{
			title: 'Forrest Gump',
			description: 'Hello world welcome to netflix. Life is like a box of chocolates',
			genre: 'drama',
		},
		{
			title: 'Back to the Future',
			description: 'I am marty McFly. I am time traveling',
			genre: 'action',
		},
		{
			title: 'Rocky',
			description: 'There is no tomorrow. Apollo Creed is the champ',
			genre: 'action',
		},
	]

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])

	return profile.displayName ? (
		<>
			{loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
			<Header src="joker1" dontShowOnSmallViewPort>
				<Header.Frame>
					<Header.Group>
						<Header.Logo src="/images/misc/logo.svg" alt="Netflix" />
						<Link
							href="#"
							active={category === 'series' ? 'true' : 'false'}
							onClick={() => setCategory('series')}>
							<a>Series</a>
						</Link>
						<Link
							href="#"
							active={category === 'films' ? 'true' : 'false'}
							onClick={() => setCategory('films')}>
							<a>Films</a>
						</Link>
					</Header.Group>
					<Header.Group>
						<Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
						<Header.Profile>
							<Header.Picture src={user.photoURL} />
							<Header.Dropdown>
								<Header.Group>
									<Header.Picture src={user.photoURL} />
									<Link href="#">{user.displayName}</Link>
								</Header.Group>
								<Header.Group>
									<Link href="#" onClick={() => console.log('supabase signout')}>
										Sign out
									</Link>
								</Header.Group>
							</Header.Dropdown>
						</Header.Profile>
					</Header.Group>
				</Header.Frame>
				<Header.Feature>
					<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
					<Header.Text>
						Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as
						he walks the streets of Gotham City. Arthur wears two masks -- the one he
						paints for his day job as a clown, and the guise he projects in a futile
						attempt to feel like hes part of the world around him.
					</Header.Text>
					<Header.PlayButton>Play</Header.PlayButton>
				</Header.Feature>
			</Header>

			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
