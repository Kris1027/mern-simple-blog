export const addArticle = async ({ request }) => {
    const formData = new URLSearchParams(await request.formData());
    const newArticle = {
        title: formData.get('title'),
        text: formData.get('text'),
        author: formData.get('author'),
        category: formData.get('category'),
    };

    if (!newArticle.title || !newArticle.text || !newArticle.author || !newArticle.category) {
        return { success: false, message: 'Please fill in all the fields' };
    }
    const res = await fetch('/api/articles/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
    });
    const data = await res.json();
    return { success: true, message: 'The article has been successfully created', data: data };
};
