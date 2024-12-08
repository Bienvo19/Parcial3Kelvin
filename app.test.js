// app.test.js
test('La página contiene "Hola Mundo"', () => {
    const contenido = '<h1>Hola Mundo desde GitHub</h1>';
    expect(contenido).toMatch(/Hola Mundo/);
});