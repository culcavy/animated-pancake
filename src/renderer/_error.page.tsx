export { Page }

function Page({ is404, errorInfo }: { is404: boolean; errorInfo?: string }) {
    if (is404) {
        return (
            <section className="bulma-section">
                <h1 className="bulma-title">404 Page Not Found</h1>
                <p>This page could not be found.</p>
                <p>{errorInfo}</p>
            </section>
        )
    } else {
        return (
            <section className="bulma-section">
                <h1 className="bulma-title">500 Internal Server Error</h1>
                <p>Something went wrong.</p>
                <p>{errorInfo}</p>
            </section>
        )
    }
}