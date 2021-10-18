import '../styles/globals.css'
import { GlobalStyles } from '../styles/global-styles'
import { AuthProvider } from '../context/Auth'
import { supabase } from '../utils/supbase'
function MyApp({ Component, pageProps }) {
	return (
		<>
			<AuthProvider supabaseClient={supabase}>
				<GlobalStyles />
				<Component {...pageProps} />
			</AuthProvider>
		</>
	)
}

export default MyApp
