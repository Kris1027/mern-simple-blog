import { useActionData } from 'react-router-dom';
import ArticleCreateForm from '../components/article-create-form';

function CreateArticlePage() {
    const actionData = useActionData();

    return (
        <main>
            <h2>Create Article</h2>
            {actionData && actionData.success === false && (
                <div className='text-red-500'>{actionData.message}</div>
            )}
            {actionData && actionData.success && (
                <div className='text-green-500'>{actionData.message}</div>
            )}
            <ArticleCreateForm />
        </main>
    );
}

export default CreateArticlePage;
