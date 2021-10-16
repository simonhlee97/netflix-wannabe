import React from 'react'
// import Link from 'next/link'
import { Background, Container, Logo, ButtonLink, MyLink } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<MyLink to={to}>
			<Logo {...restProps} />
		</MyLink>
	)
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>
}
