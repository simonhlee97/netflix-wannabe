import { useState } from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import Router from 'next/router'
import { Auth, Typography, Button } from '@supabase/ui'
import { supabase } from '../utils/supbaseClient'
import { Header, Profiles } from '../components'

const Container = (props) => {
	const { user } = Auth.useUser()

	if (user)
		return (
			<>
				<Profiles>
					<Profiles.Title>Who is watching?</Profiles.Title>
					<Profiles.List>
						<Profiles.User
							onClick={() =>
								setProfile({
									displayName: 'Bob',
									photoURL: '1',
								})
							}>
							<Profiles.Picture src="1" />
							<Profiles.Name>Bob</Profiles.Name>
						</Profiles.User>
					</Profiles.List>
				</Profiles>
				<Typography.Text>Signed in: {user.email}</Typography.Text>
				<Button block onClick={() => props.supabaseClient.auth.signOut()}>
					Sign out
				</Button>
			</>
		)

	return props.children
}

export default function Signin() {
	return (
		<>
			<HeaderContainer>
				<Form>
					<Container supabaseClient={supabase}>
						<Form.Title>Log in / Sign up</Form.Title>
						<Auth supabaseClient={supabase} />
					</Container>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}
