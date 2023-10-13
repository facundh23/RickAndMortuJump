
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ErrorPage from '../pages/Error/ErrorPage'
import HomePage from '../pages/Layout/Home'
import { Suspense, lazy } from 'react'
import HomeSkeleton from '../assets/skeleton/skeleton'

const LazyHome = lazy(() => import("../pages/Layout/Home"))

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Suspense fallback={<HomeSkeleton />}><LazyHome /></Suspense>}></Route>
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}