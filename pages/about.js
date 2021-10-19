import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const styles = {
	backgroundColor: '#3D3D3D',
	color: 'black',
	textAlign: 'center',
	paddingTop: '3em',
	paddingBottom: '5em',
}

export default function About() {
	return (
		<div style={styles}>
			<h2>About This Project</h2>
			<p>
				created by{' '}
				<Link className="about-link" href="https://github.com/simonhlee97">
					Simon Lee
				</Link>
			</p>
			<h3>Built with:</h3>
			<ul
				style={{
					listStyleType: 'none',
					display: 'flex',
					flexWrap: 'wrap',
					marginLeft: 'auto',
					marginRight: 'auto',
					width: '520px',
					justifyContent: 'center',
				}}>
				<li className="about-flex-item">
					<Link href="https://nextjs.org/" passHref>
						<Image
							src="https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png"
							alt="next"
							className="about-list-item"
							width="120"
							height="120"
						/>
					</Link>
				</li>
				<li className="about-flex-item">
					<Link href="https://styled-components.com/" passHref>
						<Image
							src="https://styled-components.com/logo.png"
							className="about-list-item"
							width="120"
							height="120"
							alt="styled"
						/>
					</Link>
				</li>
				<li className="about-flex-item">
					<Link href="https://vercel.com/" passHref>
						<Image
							src="https://miro.medium.com/max/1200/1*oBm_3saYz4AI_MS6OekdFQ.png"
							className="about-list-item"
							width="228"
							height="120"
							alt="vercel"
						/>
					</Link>
				</li>
			</ul>
			<p>
				<Link className="about-link" href="/">
					Back to home
				</Link>
			</p>
		</div>
	)
}
