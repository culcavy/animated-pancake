export { Page }

import './index.css'
import Hello from './hello.mdx'

function Page() {
  return (
    <>
      <section className="section">
        <h1 className="title">Section</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
        <Hello />
      </section>
    </>
  )
}