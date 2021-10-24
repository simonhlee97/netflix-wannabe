export const useSupabase = () => {
	const context = React.useContext(SupabaseContext)

	if (context === undefined) {
		throw new Error('useSupabase must be used within a SupabaseContext.Provider')
	}

	return context.sb
}

export const useUser = () => {
	const context = React.useContext(SupabaseContext)

	if (context === undefined) {
		throw new Error('useSupabase must be used within a SupabaseContext.Provider')
	}

	return context.user
}
