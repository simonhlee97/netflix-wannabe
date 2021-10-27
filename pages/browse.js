import { BrowseContainer } from '../containers/browse'
// import { useContent } from '../hooks'
import { useState, useEffect } from 'react'
// import { selectionMap} from '../utils'

export default function Browse() {
	// useEffect(() => {
	// 	const fuse = new Fuse(dumb, { keys: ['dumb.description', 'dumb.title', 'dumb.genre'] })
	// 	const results = fuse.search(searchTerm).map(({ item }) => item)

	// 	if (dumb.length > 0 && searchTerm.length > 3 && results.length > 0) {
	// 		setSlideRows(results)
	// 	} else {
	// 		setSlideRows(slides[category])
	// 	}
	// }, [searchTerm])

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
		</>
	)
}
