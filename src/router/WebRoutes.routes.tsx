
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import CardList from '../components/Card/CardList'
import ErrorPage from '../pages/Error/ErrorPage'
import HomePage from '../pages/Layout/Home'



export const router = createBrowserRouter(([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/home', element: <HomePage /> },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
]))