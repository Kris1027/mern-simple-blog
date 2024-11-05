import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import ArticleDetails from './article-details';
import ArticleUpdateForm from './article-update-form';

function ArticleCard({ article, showButtons }) {
    const [isEdit, setIsEdit] = useState(false);
    const fetcher = useFetcher();

    return (
        <div className='py-4'>
            {fetcher.data && fetcher.data.success === false && (
                <div className='text-red-500'>{fetcher.data.message}</div>
            )}
            {fetcher.data && fetcher.data.success && (
                <div className='text-green-500'>{fetcher.data.message}</div>
            )}
            {!isEdit ? (
                <ArticleDetails article={article} />
            ) : (
                <ArticleUpdateForm article={article} fetcher={fetcher} setIsEdit={setIsEdit} />
            )}
            {!showButtons ? (
                <Link to={article._id}>Show more</Link>
            ) : (
                <div>
                    <button onClick={() => setIsEdit((prevState) => !prevState)}>Edit</button>
                    <fetcher.Form method='POST' action={`/deleteArticle/${article._id}`}>
                        <button>Delete</button>
                    </fetcher.Form>
                </div>
            )}
        </div>
    );
}

export default ArticleCard;
