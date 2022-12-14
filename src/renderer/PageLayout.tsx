export { PageLayout }

import React from 'react'
import 'bulma-prefix/css/bulma.prefixed.css'
import './PageLayout.css'
import type { PropsWithChildren } from 'react'

function PageLayout({ children }: PropsWithChildren) {
  return (
    <React.StrictMode>
      <nav className="bulma-navbar" role="navigation" aria-label="main navigation">
        <div className="bulma-navbar-brand">
          <a className="bulma-navbar-item" href={import.meta.env.BASE_URL}>
            <i className="fas fa-home" aria-hidden="true"></i>
          </a>
          <a role="button" className="bulma-navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="bulma-navbar-menu">
          <div className="bulma-navbar-start">
            <a className="bulma-navbar-item" href={import.meta.env.BASE_URL + 'catalog'}>
              Catalog
            </a>
            <a className="bulma-navbar-item" href={import.meta.env.BASE_URL + 'zh/catalog'}>
              ZH
            </a>
            <div className="bulma-navbar-item bulma-has-dropdown bulma-is-hoverable">
              <a className="bulma-navbar-link">
                More
              </a>

              <div className="bulma-navbar-dropdown">
                <a className="bulma-navbar-item" href={import.meta.env.BASE_URL + "about"}>
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="bulma-navbar-end">
            <div className="bulma-navbar-item">
              <div className="bulma-buttons">
                <a className="bulma-button bulma-is-light">
                  EN
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <footer className="bulma-footer">
        <div className="bulma-content bulma-has-text-centered">
          <p>
            <strong>animated-pancake</strong> by <a href="https://culcavy.github.io/animated-pancake">hollykbuck</a>. The source code is
            licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </React.StrictMode>
  )
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

function Content({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  )
}