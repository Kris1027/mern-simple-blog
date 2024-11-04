import { Link } from 'react-router-dom';

function ArticleCard({ article, showLink }) {
    return (
        <div className='py-4'>
            <h2>{article.title}</h2>
            <p>{article._id}</p>
            <p>{article.text}</p>
            <p>{article.author}</p>
            <p>{article.category}</p>
            <p>{article.createdAt}</p>
            <p>{article.updatedAt}</p>
            <div>
                {showLink && <Link to={article._id}>Show more</Link>}
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default ArticleCard;
