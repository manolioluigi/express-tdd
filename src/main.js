const createSlug = require('./functions');

const posts = [
    { title: 'Una giornata al parco', slug: createSlug('Una giornata al parco', posts) },
    { title: 'Domani potrebbe piovere', slug: createSlug('Domani potrebbe piovere', posts) },
    { title: 'Gli esports in italia, bene o male?', slug: createSlug('Gli esports in italia, bene o male?', posts) },
    { title: 'Domani potrebbe piovere', slug: createSlug('Domani potrebbe piovere', posts) },
    { title: 'Domani potrebbe piovere', slug: createSlug('Domani potrebbe piovere', posts) },
];

console.log(posts);