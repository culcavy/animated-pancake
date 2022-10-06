import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<p>loading</p>}>
    </Suspense>
  )
}

export default App
