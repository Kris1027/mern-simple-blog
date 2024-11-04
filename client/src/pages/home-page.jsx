import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../components/article-card';

function HomePage() {
    const articles = useLoaderData();

    return (
        <main>
            <ul>
                {articles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </ul>
        </main>
    );
}

export default HomePage;
