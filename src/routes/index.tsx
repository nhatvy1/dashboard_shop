import { createBrowserRouter, RouterProvider } from 'react-router'
import { LoginPage } from '../modules/auth/page/login'
import Home from '../modules/home/components/home'
import AddProductPage from '../modules/products/pages/add-product'

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/products/add',
    element: <AddProductPage />
  }
]

export default function Routes() {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}
