import { useState } from 'react';
import { Form, useNavigation, useSubmit } from 'react-router-dom';
import LoadingSpinner from './loading-spinner';

function ArticleCreateForm() {
    const submit = useSubmit();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        author: '',
        category: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};

        if (!data.title?.trim()) newErrors.title = 'title is required';
        if (!data.text?.trim()) newErrors.text = 'text is required';
        if (!data.author?.trim()) newErrors.author = 'author is required';
        if (!data.category?.trim()) newErrors.category = 'category is required';

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        submit(e.target, { method: 'post', action: '/create' });
    };

    if (isSubmitting) return <LoadingSpinner />;

    return (
        <Form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-2 text-black'>
            <div className='flex flex-col'>
                <input
                    value={formData.title}
                    onChange={handleChange}
                    className={errors.title ? 'border-red-500 border-2' : ''}
                    type='text'
                    name='title'
                    placeholder='title'
                />
                {errors.title && <span className='text-red-500 text-sm'>{errors.title}</span>}
            </div>

            <div className='flex flex-col'>
                <textarea
                    value={formData.text}
                    onChange={handleChange}
                    className={errors.text ? 'border-red-500 border-2' : ''}
                    name='text'
                    placeholder='text'
                ></textarea>
                {errors.text && <span className='text-red-500 text-sm'>{errors.text}</span>}
            </div>

            <div className='flex flex-col'>
                <input
                    value={formData.author}
                    onChange={handleChange}
                    className={errors.author ? 'border-red-500 border-2' : ''}
                    type='text'
                    name='author'
                    placeholder='author'
                />
                {errors.author && <span className='text-red-500 text-sm'>{errors.author}</span>}
            </div>

            <div className='flex flex-col'>
                <input
                    value={formData.category}
                    onChange={handleChange}
                    className={errors.category ? 'border-red-500 border-2' : ''}
                    type='text'
                    name='category'
                    placeholder='category'
                />
                {errors.category && <span className='text-red-500 text-sm'>{errors.category}</span>}
            </div>

            <button type='submit' className='text-white'>
                Create Article
            </button>
        </Form>
    );
}

export default ArticleCreateForm;
