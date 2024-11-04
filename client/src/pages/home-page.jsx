import { useLoaderData } from 'react-router-dom';

function HomePage() {
    const articles = useLoaderData();

    return (
        <main>
            <ul>
                {articles.map((article) => (
                    <li key={article._id} className='py-4'>
                        <h2>{article.title}</h2>
                        <p>{article.text}</p>
                        <p>{article.author}</p>
                        <p>{article.category}</p>
                        <p>{article.createdAt}</p>
                        <p>{article.updatedAt}</p>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default HomePage;
