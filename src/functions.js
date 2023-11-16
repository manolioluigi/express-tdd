function createSlug(title, posts) {
    if (!title || typeof title !== 'string') {
        throw new Error('Titolo invalido o errato');
    }

    if (!Array.isArray(posts)) {
        throw new Error('Post non trovati');
    }

    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    let slug = formattedTitle;
    let counter = 1;

    while (posts.some(post => post.slug === slug)) {
        slug = `${formattedTitle}-${counter}`;
        counter++;
    }

    return slug;
}

module.exports = createSlug;