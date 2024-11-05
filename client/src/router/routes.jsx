import ErrorBoundary from '../error-boundary';
import RootLayout from '../layouts/root-layout';

import { addArticle } from '../actions/add-article';
import { deleteArticle } from '../actions/delete-article';
import { updateArticle } from '../actions/update-article';
import { fetchArticles } from '../loaders/fetch-articles';
import { fetchSingleArticle } from '../loaders/fetch-single-article';

import ArticlePage from '../pages/article-page';
import CreateArticle from '../pages/create-article';
import HomePage from '../pages/home-page';

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
        errorElement: <ErrorBoundary />,
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
