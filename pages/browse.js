import { BrowseContainer } from '../containers/browse'
import { Card } from '../components/card'
// import { useContent } from '../hooks'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supbaseClient'
// import { selectionMap} from '../utils'

export default function Browse() {
	const [films, setFilms] = useState([])
	const [film, setFilm] = useState({ title: '', description: '', genre: '', maturity: '' })
	const { title, description, genre, maturity } = film

	// const [searchTerm, setSearchTerm] = useState('')

	// const slides = selectionMap({ films })

	useEffect(() => {
		fetchFilms()
		// fetchSeries()
	}, [])

	// useEffect(() => {
	// 	const fuse = new Fuse(dumb, { keys: ['dumb.description', 'dumb.title', 'dumb.genre'] })
	// 	const results = fuse.search(searchTerm).map(({ item }) => item)

	// 	if (dumb.length > 0 && searchTerm.length > 3 && results.length > 0) {
	// 		setSlideRows(results)
	// 	} else {
	// 		setSlideRows(slides[category])
	// 	}
	// }, [searchTerm])

	async function fetchFilms() {
		const { data } = await supabase.from('films').select()
		setFilms(data)
		console.log(data)
	}
	// async function fetchSeries() {
	// 	const { data } = await supabase.from('series').select()
	// 	setSeries(data)
	// 	console.log(data)
	// }

	// const { series } = useContent('series')
	// const { films } = useContent('films')
	// const slides = selectionMap({ series, films })

	return (
		<>
			<BrowseContainer />
			{films.map((film) => (
				<div key={film.id}>
					<h3>{film.title}</h3>
					<p>{film.description}</p>
					<p>{film.genre}</p>
					<hr />
				</div>
			))}
		</>
	)
}
