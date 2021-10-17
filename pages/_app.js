import '../styles/globals.css'
import { GlobalStyles } from '../styles/global-styles'
import { SupabaseContext } from '../context/supbase'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
