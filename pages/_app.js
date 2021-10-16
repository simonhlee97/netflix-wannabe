import '../styles/globals.css'
import { GlobalStyles } from './global-styles'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
