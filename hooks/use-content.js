import { useEffect, useState, useContext } from 'react'
import { SupabaseContext } from '../context/supabaseContext';

export default function useContent(target) {
	const [content, setContent] = useState([])
	const { supabase } = useContext(SupabaseContext)

	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase
				.from('films')
				.select()
				.catch((error) => {
					console.log(error.message)
				})
		}
	}
}
