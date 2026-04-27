import { createBrowserRouter, RouterProvider } from 'react-router'
import { Suspense, lazy } from 'react'
import { LoginPage } from '../features/auth/page/login'
import { DashboardLayout } from '../features/layouts'
import Home from '@/features/home/pages/home-page'

// Lazy-loaded pages for code splitting
const CountriesPage = lazy(() => import('@/features/countries/countries-page'))
const UsersPage = lazy(() => import('@/features/users/pages/users-page'))
const RolesPage = lazy(() => import('@/features/roles/pages/roles-page'))
const ArticlesPage = lazy(
  () => import('@/features/articles/pages/articles-page')
)
const SeriesPage = lazy(() => import('@/features/series/pages/series-page'))
const CategoriesPage = lazy(
  () => import('@/features/categories/categories-page')
)
const ImagesPage = lazy(() => import('@/features/images/pages/images-page'))
const BlogPostsPage = lazy(
  () => import('@/features/blog-posts/pages/blog-posts-page')
)
const DirectorsPage = lazy(() => import('@/features/directors/pages/directors-page'))
const KKPhimSyncPage = lazy(
  () => import('@/features/kkphim-sync/pages/kkphim-sync-page')
)
const OPhimSyncPage = lazy(
  () => import('@/features/ophim-sync/pages/ophim-sync-page')
)
const KKMoviesPage = lazy(
  () => import('@/features/kkmovies/pages/kkmovies-page')
)
const PagesPage = lazy(() => import('@/features/pages/pages/pages-page'))
const MenusPage = lazy(() => import('@/features/menus/pages/menus-page'))
const BrandsPage = lazy(() => import('@/features/brands/pages/brands-page'))
const SidebarConfigPage = lazy(
  () => import('@/features/sidebar/pages/sidebar-config-page')
)
const TrendingMoviesPage = lazy(
  () => import('@/features/trending-movies/pages/trending-movies-page')
)
const CommentsPage = lazy(
  () => import('@/features/comments/pages/comments-page')
)
const RobotTxtPage = lazy(
  () => import('@/features/robot-txt/pages/robot-txt-page')
)
const RedirectionsPage = lazy(
  () => import('@/features/redirections/pages/redirections-page')
)
const InformationPage = lazy(
  () => import('@/features/information/pages/information-page')
)
const AIConfigPage = lazy(
  () => import('@/features/ai-config/pages/ai-config-page')
)
const SettingsPage = lazy(
  () => import('@/features/settings/pages/settings-page')
)

const LoadingFallback = () => (
  <div className='flex min-h-screen items-center justify-center'>
    <div className='border-primary h-8 w-8 animate-spin rounded-full border-t-2 border-b-2' />
  </div>
)

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
      {
        path: 'users',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UsersPage />
          </Suspense>
        )
      },
      {
        path: 'roles',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RolesPage />
          </Suspense>
        )
      },
      {
        path: 'articles',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ArticlesPage />
          </Suspense>
        )
      },
      {
        path: 'series',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SeriesPage />
          </Suspense>
        )
      },
      {
        path: 'categories',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CategoriesPage />
          </Suspense>
        )
      },
      {
        path: 'countries',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CountriesPage />
          </Suspense>
        )
      },
      {
        path: 'images',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ImagesPage />
          </Suspense>
        )
      },
      {
        path: 'blog-posts',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BlogPostsPage />
          </Suspense>
        )
      },
      {
        path: 'directors',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DirectorsPage />
          </Suspense>
        )
      },
      {
        path: 'kkphim-sync',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <KKPhimSyncPage />
          </Suspense>
        )
      },
      {
        path: 'ophim-sync',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <OPhimSyncPage />
          </Suspense>
        )
      },
      {
        path: 'kkmovies',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <KKMoviesPage />
          </Suspense>
        )
      },
      {
        path: 'pages',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PagesPage />
          </Suspense>
        )
      },
      {
        path: 'menus',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MenusPage />
          </Suspense>
        )
      },
      {
        path: 'brands',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BrandsPage />
          </Suspense>
        )
      },
      {
        path: 'sidebar-config',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SidebarConfigPage />
          </Suspense>
        )
      },
      {
        path: 'trending-movies',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TrendingMoviesPage />
          </Suspense>
        )
      },
      {
        path: 'comments',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CommentsPage />
          </Suspense>
        )
      },
      {
        path: 'robot-txt',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RobotTxtPage />
          </Suspense>
        )
      },
      {
        path: 'redirections',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RedirectionsPage />
          </Suspense>
        )
      },
      {
        path: 'information',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <InformationPage />
          </Suspense>
        )
      },
      {
        path: 'ai-config',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AIConfigPage />
          </Suspense>
        )
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <SettingsPage />
          </Suspense>
        )
      }
    ]
  }
]

export default function Routes() {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}
