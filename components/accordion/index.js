import React, { useState, useContext, createContext } from 'react'
import { Body, Frame, Title, Header, Container, Inner, Item } from './styles/accordion'
import Image from 'next/image'
const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	)
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false)
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	)
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext)
	return (
		<Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
			{children}
			{toggleShow ? (
				<Image src="/images/icons/close-slim.png" width="50" height="50" alt="Close" />
			) : (
				<Image src="/images/icons/add.png" width="50" height="50" alt="Open" />
			)}
		</Header>
	)
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext)
	return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
