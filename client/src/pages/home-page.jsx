import { useLoaderData, useNavigation } from 'react-router-dom';
import ArticleCard from '../components/article-card';
import LoadingSpinner from '../components/loading-spinner';

function HomePage() {
    const articles = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    if (isLoading) return <LoadingSpinner />;

    return (
        <main>
            <ul>
                {articles.map((article) => (
                    <li key={article._id}>
                        <ArticleCard article={article} showButtons={false} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default HomePage;
