import { useState } from 'react'
import { Header } from '../components'
// import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

export function BrowseContainer() {
	const [profile, setProfile] = useState({})

	const user = {
		displayName: 'Tester',
		photoURL: '1',
	}

	return profile.displayName ? (
		<>
			<p>Browse Container</p>
			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	)
}
