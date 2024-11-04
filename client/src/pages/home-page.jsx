import { useLoaderData } from 'react-router-dom';
import ArticleCard from '../components/article-card';

function HomePage() {
    const articles = useLoaderData();

    return (
        <main>
            <ul>
                {articles.map((article) => (
                    <li key={article._id}>
                        <ArticleCard article={article} showLink={true} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default HomePage;
