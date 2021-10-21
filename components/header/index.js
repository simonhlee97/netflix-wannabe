import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
	Group,
	Background,
	MyLink,
	Text,
	Container,
	Logo,
	ButtonLink,
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
		<Link href={href} passHref>
			<Logo {...restProps} />
		</Link>
	)
}

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>
}

Header.MyLink = function HeaderMyLink({ children, ...restProps }) {
	return <MyLink {...restProps}>{children}</MyLink>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>
}
