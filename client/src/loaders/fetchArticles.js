export const fetchArticles = async () => {
    const res = await fetch('/api/articles/');
    if (!res.ok) throw new Error('Failed to load articles', { status: 500 });

    const data = await res.json();
    return data.data;
};
