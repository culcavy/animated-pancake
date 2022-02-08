export { Page }

function Page() {
    return (
        <>
            <section className="bulma-hero bulma-is-primary">
                <div className="bulma-hero-body">
                    <p className="bulma-title">
                        Catalog
                    </p>
                </div>
            </section>
            <section className="bulma-section">
                <nav className="bulma-panel">
                    <p className="bulma-panel-heading">
                        Latest
                    </p>
                    <div className="bulma-panel-block">
                        <p className="bulma-control bulma-has-icons-left">
                            <input className="bulma-input" type="text" placeholder="Search" />
                            <span className="bulma-icon bulma-is-left">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <a className="bulma-panel-block bulma-is-active" href="hello">
                        <span className="bulma-panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Hello
                    </a>
                </nav>
            </section>
        </>
    )
}