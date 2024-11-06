import { useState } from 'react';
import LoadingSpinner from './loading-spinner';

function ArticleUpdateForm({ article, setIsEdit, fetcher }) {
    const isSubmitting = fetcher.state === 'submitting';

    const [formData, setFormData] = useState({
        title: article.title,
        text: article.text,
        image: article.image,
        author: article.author,
        category: article.category,
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (isSubmitting) return <LoadingSpinner />;

    return (
        <fetcher.Form
            method='POST'
            action={`/articles/update/${article._id}`}
            className='text-red-500 flex flex-col gap-1'
            onSubmit={() => setIsEdit((prevState) => !prevState)}
        >
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange} />
            <label htmlFor='text'>Text</label>
            <textarea name='text' rows={10} value={formData.text} onChange={handleChange} />
            <label htmlFor='image'>Image URL</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange} />
            <label htmlFor='author'>Author</label>
            <input type='text' name='author' value={formData.author} onChange={handleChange} />
            <label htmlFor='category'>Category</label>
            <input type='text' name='category' value={formData.category} onChange={handleChange} />
            <button className='text-white' disabled={isSubmitting} type='submit'>
                {isSubmitting ? 'Saving...' : 'Save'}
            </button>
        </fetcher.Form>
    );
}

export default ArticleUpdateForm;
