import { useLoaderData, useNavigation } from 'react-router-dom';
import ArticleCard from '../components/article-card';
import LoadingSpinner from '../components/loading-spinner';

function ArticlePage() {
    const article = useLoaderData();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    if (isLoading) return <LoadingSpinner />;

    return (
        <main>
            <ArticleCard article={article} showButtons={true} />
        </main>
    );
}

export default ArticlePage;
