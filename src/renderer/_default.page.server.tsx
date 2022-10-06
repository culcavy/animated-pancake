export { render }
export { passToClient }

import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageLayout } from './PageLayout'
import type { PageContext } from './types'
import { PageContextProvider } from './usePageContext'

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps']

function render(pageContext: PageContext) {
  let pageHtml
  if (!pageContext.Page) {
    // SPA
    pageHtml = ''
  } else {
    // SSR / HTML-only
    const { Page, pageProps } = pageContext
    pageHtml = ReactDOMServer.renderToString(
      <PageContextProvider pageContext={pageContext}>
        <PageLayout>
          <Page {...pageProps} />
        </PageLayout>
      </PageContextProvider>
    )
  }

  return escapeInject`<!DOCTYPE html>
    <html>
      <header>
      </header>
      <body>
        <div id="react-container">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}