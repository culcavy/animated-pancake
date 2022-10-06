export { PageLayout }

import React from 'react'
import 'bulma-prefix/css/bulma.prefixed.css'
import type { PropsWithChildren } from 'react'

function PageLayout({ children }: PropsWithChildren) {
  return (
    <React.StrictMode>
      <nav className="bulma-navbar" role="navigation" aria-label="main navigation">
        <div className="bulma-navbar-brand">
          <a className="bulma-navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className="bulma-navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="bulma-navbar-menu">
          <div className="bulma-navbar-start">
            <a className="bulma-navbar-item">
              Home
            </a>

            <a className="bulma-navbar-item">
              Documentation
            </a>

            <div className="bulma-navbar-item bulma-has-dropdown bulma-is-hoverable">
              <a className="bulma-navbar-link">
                More
              </a>

              <div className="bulma-navbar-dropdown">
                <a className="bulma-navbar-item">
                  About
                </a>
                <a className="bulma-navbar-item">
                  Jobs
                </a>
                <a className="bulma-navbar-item">
                  Contact
                </a>
                <hr className="bulma-navbar-divider" />
                <a className="bulma-navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="bulma-navbar-end">
            <div className="bulma-navbar-item">
              <div className="bulma-buttons">
                <a className="bulma-button bulma-is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="bulma-button bulma-is-light">
                  Log in
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
            <strong>animated-pancake</strong> by <a href="https://culcavy.github.io/animated-pancake">hollykbuck</a>. The source code is licensed 
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
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