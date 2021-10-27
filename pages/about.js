import Link from 'next/link'
import Image from 'next/image'

export default function About() {
	return (
		<div>
			<style jsx>
				{`
					background-color: navy;
					text-align: center;
					color: silver;
					overflow-x: hidden;
				`}
			</style>
			<h2>About This Project</h2>
			<p>
				The Netflix clone project is the last project in{' '}
				<Link href="https://scrimba.com/" target="_blank">
					Scrimba&apos;s Frontend Developer Career Path
				</Link>
			</p>
			<p>
				created by{' '}
				<Link className="about-link" href="https://github.com/simonhlee97">
					<a>Simon Lee</a>
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
					width: '98%',
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
					<Link href="https://vercel.com/" passHref>
						<Image
							src="https://miro.medium.com/max/1200/1*oBm_3saYz4AI_MS6OekdFQ.png"
							className="about-list-item"
							width="248"
							height="120"
							alt="vercel"
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
			</ul>
			<p>
				<Link className="about-link" href="/">
					Back to project
				</Link>
			</p>
			<p>
				<Link className="about-project" href="https://simonpost.com/">
					Read more about this project...
				</Link>
			</p>
		</div>
	)
}
