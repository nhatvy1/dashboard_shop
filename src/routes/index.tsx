import { createBrowserRouter, RouterProvider } from 'react-router'
import { LoginPage } from '../modules/auth/page/login'
import AddProductPage from '../modules/products/pages/add-product'
import { DashboardLayout } from '../modules/layouts'
import Home from '../modules/home/components/home'

const routes = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <div>Register Page</div>
  },

  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <Home />, index: true },
      { path: '/users', element: <div>Users Page</div> },
      {
        path: '/them-san-pham',
        element: <AddProductPage />
      }
    ]
  }
]

export default function Routes() {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}
