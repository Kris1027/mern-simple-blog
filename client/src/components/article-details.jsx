function ArticleDetails({ article }) {
    return (
        <div>
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
