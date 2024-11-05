import { useState } from 'react';

function ArticleUpdateForm({ article, setIsEdit, fetcher }) {
    const isSubmitting = fetcher.state === 'submitting';

    const [formData, setFormData] = useState({
        title: article.title,
        text: article.text,
        author: article.author,
        category: article.category,
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <fetcher.Form
            method='POST'
            action={`/updateArticle/${article._id}`}
            className='text-black flex flex-col gap-1'
            onSubmit={() => setIsEdit((prevState) => !prevState)}
        >
            <input type='text' name='title' value={formData.title} onChange={handleChange} />
            <textarea name='text' rows={10} value={formData.text} onChange={handleChange} />
            <input type='text' name='author' value={formData.author} onChange={handleChange} />
            <input type='text' name='category' value={formData.category} onChange={handleChange} />
            <button className='text-white' disabled={isSubmitting} type='submit'>
                {isSubmitting ? 'Saving...' : 'Save'}
            </button>
        </fetcher.Form>
    );
}

export default ArticleUpdateForm;
