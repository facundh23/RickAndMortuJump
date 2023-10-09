
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import CharacterCard from '../components/Card/Card'
import CardList from '../components/Card/CardList'
import ErrorPage from '../pages/Error/ErrorPage'



export const router = createBrowserRouter(([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <CardList /> },
            { path: "character/:id", element: <CharacterCard /> },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />,
    }
]))