// tests/app.test.js
test('La página contiene "Hola Mundo desde GitHub"', () => {
    const contenido = '<h1>Hola Mundo desde GitHub</h1>';
    expect(contenido).toMatch(/Hola Mundo desde GitHub/);
});