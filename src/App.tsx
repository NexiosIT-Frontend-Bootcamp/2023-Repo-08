import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { UserContextProvider } from './contexts/userContextProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AxiosDefaultsContextProvider } from './contexts/axiosDefaultsContextProvider'
import { ProtectedRoute } from './pages/ProtectedRoute'

const routesPublic = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      { path: '', element: <Home/> },
    ]
  },
  { path: '/login', element: <Login/>},
  { path: '/register', element: <Register/>}
])

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AxiosDefaultsContextProvider>
          <RouterProvider router={routesPublic}/>
        </AxiosDefaultsContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
