import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
	Group,
	Background,
	MyLink,
	Profile,
	Text,
	Dropdown,
	Picture,
	Container,
	Logo,
	// ButtonLink,
	Feature,
	FeatureCallOut,
	PlayButton,
	Search,
	SearchIcon,
	SearchInput,
} from './styles/header'
export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
	const [searchActive, setSearchActive] = useState(false)

	return (
		<Search {...restProps}>
			<SearchIcon onClick={() => setSearchActive(!searchActive)}>
				<Image src="/images/icons/search.png" alt="Search" height="100" width="100" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search files and series"
				active={searchActive}
			/>
		</Search>
	)
}

Header.Logo = function HeaderLogo({ href, ...restProps }) {
	return (
		<div>
			<Logo {...restProps} />
		</div>
	)
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Header.MyLink = function HeaderMyLink({ children, ...restProps }) {
	return <MyLink {...restProps}>{children}</MyLink>
}

// Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
// 	return <ButtonLink {...restProps}>{children}</ButtonLink>
// }

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>
}
