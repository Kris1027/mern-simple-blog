import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
    return (
        <li key={article._id} className='py-4'>
            <Link to={`/${article._id}`}>
                <h2>{article.title}</h2>
                <p>{article._id}</p>
                <p>{article.text}</p>
                <p>{article.author}</p>
                <p>{article.category}</p>
                <p>{article.createdAt}</p>
                <p>{article.updatedAt}</p>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </Link>
        </li>
    );
}

export default ArticleCard;
