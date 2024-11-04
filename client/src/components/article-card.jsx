import { useState } from 'react';
import { Link, useFetcher } from 'react-router-dom';

function ArticleCard({ article, showButtons }) {
    const fetcher = useFetcher();

    const [isEdit, setIsEdit] = useState(false);

    const [title, setTitle] = useState(article.title);
    const [text, setText] = useState(article.text);
    const [author, setAuthor] = useState(article.author);
    const [category, setCategory] = useState(article.category);

    return (
        <div className='py-4'>
            {fetcher.data && fetcher.data.success === false && (
                <div className='text-red-500'>{fetcher.data.message}</div>
            )}
            {fetcher.data && fetcher.data.success && (
                <div className='text-green-500'>{fetcher.data.message}</div>
            )}
            {!isEdit ? (
                <>
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                    <p>{article.author}</p>
                    <p>{article.category}</p>
                </>
            ) : (
                <fetcher.Form
                    method='POST'
                    action={`/updateArticle/${article._id}`}
                    onSubmit={() => setIsEdit((prevState) => !prevState)}
                    className='text-black flex flex-col gap-1'
                >
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        name='text'
                        rows={10}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input
                        type='text'
                        name='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input
                        type='text'
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <button type='submit'>Save</button>
                </fetcher.Form>
            )}
            <p>{article.createdAt}</p>
            <p>{article.updatedAt}</p>
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
