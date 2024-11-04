import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../components/article-card';

function ArticlePage() {
    const article = useLoaderData();

    return (
        <main>
            <ArticleCard article={article} showButtons={true} />
        </main>
    );
}

export default ArticlePage;
