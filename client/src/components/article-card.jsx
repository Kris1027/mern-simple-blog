import { Form, Link } from 'react-router-dom';
import { deleteArticle } from '../actions/delete-article';

function ArticleCard({ article, showButtons }) {
    return (
        <div className='py-4'>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <p>{article.author}</p>
            <p>{article.category}</p>
            <p>{article.createdAt}</p>
            <p>{article.updatedAt}</p>
            {!showButtons ? (
                <Link to={article._id}>Show more</Link>
            ) : (
                <div>
                    <button>Edit</button>
                    <Form method='POST' action={deleteArticle}>
                        <button>Delete</button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default ArticleCard;
