export { Page }

import Hello from './Hello.mdx'

function Page() {
  return (
    <>
      <section className="bulma-hero bulma-is-primary">
        <div className="bulma-hero-body">
          <p className="bulma-title">
            C++ 入门
          </p>
          <p className="bulma-subtitle">
            一点微小的经验
          </p>
        </div>
      </section>
      <section className="bulma-section">
        <h1 className="bulma-title">Section</h1>
        <h2 className="bulma-subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
        <Hello />
      </section>
    </>
  )
}