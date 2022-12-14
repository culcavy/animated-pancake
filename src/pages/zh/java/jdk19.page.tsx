export { Page }

import Hello from './Hello.mdx'

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
        <div className='bulma-content'>
          <p>发布于: Mon Oct 17 11:19:25 PM CST 2022</p>
          <Hello components={{
            // h1: BulmaH1,
            // h2: BulmaH2,
            // h3: BulmaH3,
          }} />
        </div>
      </section>
    </>
  )
}