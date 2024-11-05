import { Form, useActionData } from 'react-router-dom';

function CreateArticlePage() {
    const actionData = useActionData();

    return (
        <main>
            <h2>Create Article</h2>
            {actionData && actionData.success === false && (
                <div className='text-red-500'>{actionData.message}</div>
            )}
            {actionData && actionData.success && (
                <div className='text-green-500'>{actionData.message}</div>
            )}
            <Form method='POST' className='flex flex-col gap-2 text-black'>
                <input type='text' name='title' placeholder='title' />
                <textarea name='text' placeholder='text'></textarea>
                <input type='text' name='author' placeholder='author' />
                <input type='text' name='category' placeholder='category' />
                <button type='submit' className='text-white'>
                    Create Article
                </button>
            </Form>
        </main>
    );
}

export default CreateArticlePage;
