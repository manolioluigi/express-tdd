const createSlug = require('../src/functions');

//1
test('createSlug dovrebbe ritornare una stringa', () => {
    const result = createSlug("Titolo di prova", []);
    expect(typeof result).toBe('string');
});

//2
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const result = createSlug("Titolo di Prova", []);
    expect(result).toEqual(result.toLowerCase());
});

//3
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const result = createSlug("Titolo con spazi", []);
    expect(result).toEqual("titolo-con-spazi");
});

//4
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const existingPosts = [
        { title: 'Titolo Esistente', slug: 'titolo-esistente' },
        { title: 'Altro Titolo', slug: 'altro-titolo' },
    ];

    const result = createSlug("Titolo Esistente", existingPosts);
    expect(result).toEqual("titolo-esistente-1");
});

//5
test('createSlug createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug(undefined, [])).toThrow();
    expect(() => createSlug("", [])).toThrow();
    expect(() => createSlug(123, [])).toThrow();
});

//6
test("createSlug dovrebbe lanciare un errore se manca l'array dei post", () => {
    expect(() => createSlug("Titolo di prova")).toThrow();
});