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
				I re-created the project (from a create-react-app the first time) to a Next.js app,
				and instead of Firebase, tried out Supabase. Altogether, a fun learning experience.
			</p>
			<p>
				created by{' '}
				<Link className="about-link" href="https://github.com/simonhlee97">
					<a>Simon Lee</a>
				</Link>
			</p>
			<section style={{ textAlign: 'center', maxWidth: '80vw', margin: '2em auto' }}>
				<h2>Built with:</h2>
				<div className="tech-logos">
					<Link href="https://nextjs.org/" passHref>
						<Image
							src="/images/next.jpg"
							alt="next"
							className="about-list-item"
							width="402"
							height="210"
						/>
					</Link>
				</div>

				<div className="tech-logos">
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

				<div className="tech-logos">
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

				<div className="tech-logos">
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
