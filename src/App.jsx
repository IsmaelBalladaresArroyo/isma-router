import './App.css'
import { lazy } from 'react'
// import AboutPage from './Pages/About'
import { Router } from './Router'
import NotFoundPage from './Pages/404'
import searchPage from './Pages/SearchPage'
import { Route } from './Route'
import { Suspense } from 'react'

const LazyHomePage = lazy(() => import('./Pages/Home.jsx'))
const LazyAboutPage= lazy(() => import('./Pages/About.jsx'))


const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: searchPage
  }
]


function App() {

  return (
    <main>
      <Suspense fallback={null}>
      <Router routes={appRoutes} defaultComponent={NotFoundPage}>
      <Route path="/" Component={LazyHomePage} />
      <Route path="/about" Component={LazyAboutPage} />
      </Router>
      </Suspense>
    </main>
  )
}
// npm run dev lo es todo
export default App
