export { Page }

import './index.css'
import Hello from './hello.mdx'

function Page() {
  return (
    <>
      <section className="bulma-hero bulma-is-primary">
        <div className="bulma-hero-body">
          <p className="bulma-title">
            Hero title
          </p>
          <p className="bulma-subtitle">
            Hero subtitle
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