import RootLayout from '../layouts/root-layout';

import { fetchArticles } from '../loaders/fetchArticles';
import { addArticle } from '../actions/add-article';

import CreateArticle from '../pages/create-article';
import HomePage from '../pages/home-page';

export const routes = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: fetchArticles,
            },
            {
                path: '/create',
                element: <CreateArticle />,
                action: addArticle,
            },
        ],
    },
];
