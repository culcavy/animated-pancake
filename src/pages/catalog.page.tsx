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
                    {/* <p className="bulma-panel-tabs">
                        <a className="bulma-is-active">All</a>
                        <a>Public</a>
                        <a>Private</a>
                        <a>Sources</a>
                        <a>Forks</a>
                    </p> */}
                    <a className="bulma-panel-block bulma-is-active" href="hello">
                        <span className="bulma-panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Hello
                    </a>
                    {/* <a className="bulma-panel-block">
                        <span className="bulma-panel-icon">
                            <i className="bulma-fas fa-book" aria-hidden="true"></i>
                        </span>
                        marksheet
                    </a>
                    <a className="bulma-panel-block">
                        <span className="bulma-panel-icon">
                            <i className="bulma-fas fa-book" aria-hidden="true"></i>
                        </span>
                        minireset.css
                    </a>
                    <a className="bulma-panel-block">
                        <span className="bulma-panel-icon">
                            <i className="bulma-fas fa-book" aria-hidden="true"></i>
                        </span>
                        jgthms.github.io
                    </a>
                    <a className="bulma-panel-block">
                        <span className="bulma-panel-icon">
                            <i className="bulma-fas fa-code-branch" aria-hidden="true"></i>
                        </span>
                        daniellowtw/infboard
                    </a>
                    <a className="bulma-panel-block">
                        <span className="bulma-panel-icon">
                            <i className="bulma-fas fa-code-branch" aria-hidden="true"></i>
                        </span>
                        mojs
                    </a>
                    <label className="bulma-panel-block">
                        <input type="checkbox" />
                        remember me
                    </label>
                    <div className="bulma-panel-block">
                        <button className="bulma-button bulma-is-link bulma-is-outlined bulma-is-fullwidth">
                            Reset all filters
                        </button>
                    </div> */}
                </nav>
            </section>
        </>
    )
}