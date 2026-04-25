import { createBrowserRouter, RouterProvider } from 'react-router'
import { LoginPage } from '../modules/auth/page/login'
import AddProductPage from '../modules/products/pages/add-product'
import { DashboardLayout } from '../modules/layouts'
import Home from '../modules/home/components/home'
import ChatHomePage from '../modules/chat/pages/chat-home-page'

// Pages
import UsersPage from '@/features/users/pages/users-page'
import RolesPage from '@/features/roles/pages/roles-page'
import ArticlesPage from '@/features/articles/pages/articles-page'
import SeriesPage from '@/features/series/pages/series-page'
import CategoriesPage from '@/features/categories/pages/categories-page'
import ImagesPage from '@/features/images/pages/images-page'
import BlogPostsPage from '@/features/blog-posts/pages/blog-posts-page'
import AuthorsPage from '@/features/authors/pages/authors-page'
import KKPhimSyncPage from '@/features/kkphim-sync/pages/kkphim-sync-page'
import OPhimSyncPage from '@/features/ophim-sync/pages/ophim-sync-page'
import KKMoviesPage from '@/features/kkmovies/pages/kkmovies-page'
import PagesPage from '@/features/pages/pages/pages-page'
import MenusPage from '@/features/menus/pages/menus-page'
import BrandsPage from '@/features/brands/pages/brands-page'
import SidebarConfigPage from '@/features/sidebar/pages/sidebar-config-page'
import TrendingMoviesPage from '@/features/trending-movies/pages/trending-movies-page'
import CommentsPage from '@/features/comments/pages/comments-page'
import RobotTxtPage from '@/features/robot-txt/pages/robot-txt-page'
import RedirectionsPage from '@/features/redirections/pages/redirections-page'
import InformationPage from '@/features/information/pages/information-page'
import AIConfigPage from '@/features/ai-config/pages/ai-config-page'
import SettingsPage from '@/features/settings/pages/settings-page'

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
      { path: 'users', element: <UsersPage /> },
      { path: 'roles', element: <RolesPage /> },
      { path: 'articles', element: <ArticlesPage /> },
      { path: 'series', element: <SeriesPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'images', element: <ImagesPage /> },
      { path: 'blog-posts', element: <BlogPostsPage /> },
      { path: 'authors', element: <AuthorsPage /> },
      { path: 'kkphim-sync', element: <KKPhimSyncPage /> },
      { path: 'ophim-sync', element: <OPhimSyncPage /> },
      { path: 'kkmovies', element: <KKMoviesPage /> },
      { path: 'pages', element: <PagesPage /> },
      { path: 'menus', element: <MenusPage /> },
      { path: 'brands', element: <BrandsPage /> },
      { path: 'sidebar-config', element: <SidebarConfigPage /> },
      { path: 'trending-movies', element: <TrendingMoviesPage /> },
      { path: 'comments', element: <CommentsPage /> },
      { path: 'robot-txt', element: <RobotTxtPage /> },
      { path: 'redirections', element: <RedirectionsPage /> },
      { path: 'information', element: <InformationPage /> },
      { path: 'ai-config', element: <AIConfigPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ]
  },
  {
    path: '/tin-nhan',
    element: <ChatHomePage />
  }
]

export default function Routes() {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}
