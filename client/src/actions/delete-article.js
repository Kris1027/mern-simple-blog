import { redirect } from 'react-router-dom';

export const deleteArticle = async ({ params }) => {
    const id = params.articleId;
    const res = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        throw new Error('Failed to delete article', { status: 500 });
    }
    return redirect('/');
};
