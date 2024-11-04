import CreateArticle from '../pages/create-article';
import HomePage from '../pages/home-page';

export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/create',
        element: <CreateArticle />,
    },
];
