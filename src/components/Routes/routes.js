import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Home/Home"
// import Errorpage from '../Errorpage/Errorpage'
import Blog from '../Bolg/Blog'
import Errorpage from '../Errorpage/Errorpage'
import Statics from '../Statics/Statics'
import Topics from '../Topics/Topics'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>

            },
            {
                path: 'topic/:topicId',
                // loader: async ({ params }) => {
                //     return fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
                // },
                element: <Topics></Topics>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/statics',
                element: <Statics></Statics>
            }


        ]
    },




])

export default router