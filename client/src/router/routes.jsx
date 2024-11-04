import RootLayout from '../layouts/root-layout';

import { fetchArticles } from '../loaders/fetch-articles';
import { fetchSingleArticle } from '../loaders/fetch-single-article';
import { addArticle } from '../actions/add-article';
import { deleteArticle } from '../actions/delete-article';
import { updateArticle } from '../actions/update-article';

import CreateArticle from '../pages/create-article';
import HomePage from '../pages/home-page';
import ArticlePage from '../pages/article-page';

export const routes = [
    {
        path: '/deleteArticle/:articleId',
        action: deleteArticle,
    },
    {
        path: '/updateArticle/:articleId',
        action: updateArticle,
    },
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
            {
                path: '/:articleId',
                element: <ArticlePage />,
                loader: fetchSingleArticle,
            },
        ],
    },
];
