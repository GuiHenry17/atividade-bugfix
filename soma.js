function somar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos os parâmetros devem ser números');
    }
    return a + b;
}