import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

const routes = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: '/login', element: <Login/>},
  { path: '/register', element: <Register/>}
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
