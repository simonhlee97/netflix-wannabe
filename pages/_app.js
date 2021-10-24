import '../styles/globals.css'
import { GlobalStyles } from '../styles/global-styles'
import { Auth } from '@supabase/ui'
import { supabase } from '../utils/supbaseClient'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Auth.UserContextProvider supabaseClient={supabase}>
				<GlobalStyles />
				<Component {...pageProps} />
			</Auth.UserContextProvider>
		</>
	)
}

export default MyApp
