import RootLayout from '../layouts/root-layout';
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
            },
            {
                path: '/create',
                element: <CreateArticle />,
            },
        ],
    },
];
