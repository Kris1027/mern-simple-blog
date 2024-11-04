import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../components/article-card';

function ArticlePage() {
    const article = useLoaderData();

    return (
        <main>
            <ArticleCard article={article} showLink={false} />
        </main>
    );
}

export default ArticlePage;
