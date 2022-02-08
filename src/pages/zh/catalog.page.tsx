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
                    <a className="bulma-panel-block bulma-is-active" href={import.meta.env.BASE_URL + "zh/cppintro"}>
                        <span className="bulma-panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        C++ 入门
                    </a>
                    <a className="bulma-panel-block bulma-is-active" href={import.meta.env.BASE_URL + "zh/java/jdk19"}>
                        <span className="bulma-panel-icon">
                            <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        JDK 19 关于虚拟线程的变动
                    </a>
                </nav>
            </section>
        </>
    )
}