function ArticleDetails({ article }) {
    return (
        <div>
            {article.image && (
                <img
                    className='w-full h-96 object-cover'
                    src={article.image}
                    alt={`image for the artice: ${article.title}`}
                />
            )}
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <p>{article.author}</p>
            <p>{article.category}</p>
            <p>{article.createdAt}</p>
            <p>{article.updatedAt}</p>
        </div>
    );
}

export default ArticleDetails;
