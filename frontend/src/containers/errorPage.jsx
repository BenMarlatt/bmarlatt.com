import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}

const NotFound = () => {
	return <h1>404: Page not found</h1>
}

export { ErrorPage, NotFound }
