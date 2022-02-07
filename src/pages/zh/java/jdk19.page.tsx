export { Page }

import Hello from './Hello.mdx'
import type { PropsWithChildren } from 'react'

const BulmaH1 = (props: PropsWithChildren) => {
  return <h1 className="bulma-title">{props.children}</h1>
}

const BulmaH2 = (props: PropsWithChildren) => {
  return <h2 className="bulma-subtitle">{props.children}</h2>
}

function Page() {
  return (
    <>
      <section className="bulma-hero bulma-is-primary">
        <div className="bulma-hero-body">
          <p className="bulma-title">
            JDK 19 引入的改变
          </p>
          <p className="bulma-subtitle">
            虚拟线程篇
          </p>
        </div>
      </section>
      <section className="bulma-section">
        <h1 className="bulma-title">Section</h1>
        <h2 className="bulma-subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
        
        <Hello components={{
          h1: BulmaH1,
          h2: BulmaH2
        }} />
      </section>
    </>
  )
}