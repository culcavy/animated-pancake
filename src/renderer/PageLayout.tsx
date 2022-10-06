export { PageLayout }

import './PageLayout.css'
import React from 'react'
import type { PropsWithChildren } from 'react'

function PageLayout({ children }: PropsWithChildren) {
  return (
    <React.StrictMode>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  )
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}