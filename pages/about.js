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
			<section style={{ maxWidth: '75vw', margin: '2em auto' }}>
				<h3>Built with:</h3>
				<div>
					<Link href="https://nextjs.org/" passHref>
						<Image
							src="https://pics.freeicons.io/uploads/icons/png/9114856761551941711-512.png"
							alt="next"
							className="about-list-item"
							width="120"
							height="120"
						/>
					</Link>
				</div>

				<div>
					<Link href="https://supabase.io/" passHref>
						<Image
							src="/images/supa.jpg"
							alt="supabase"
							className="about-list-item"
							width="471"
							height="280"
						/>
					</Link>
				</div>

				<div>
					<Link href="https://vercel.com/" passHref>
						<Image
							src="/images/vercel.jpg"
							className="about-list-item"
							width="600"
							height="262"
							alt="vercel"
						/>
					</Link>
				</div>

				<div>
					<Link href="https://styled-components.com/" passHref>
						<Image
							src="/images/styled.jpg"
							className="about-list-item"
							width="463"
							height="354"
							alt="styled"
						/>
					</Link>
				</div>
			</section>
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
			<p>
				<Link href="https://github.com/simonhlee97/netflix-wannabe">Project Repo</Link>
			</p>
		</div>
	)
}
