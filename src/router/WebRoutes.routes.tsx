
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ErrorPage from '../pages/Error/ErrorPage'
import HomeSkeleton from '../assets/skeleton/skeleton'


const LazyHome = lazy(() => import("../pages/Home/Home"))

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