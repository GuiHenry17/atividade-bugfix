// buggy-file.js
function formatarData(data) {
    if (!(data instanceof Date) || isNaN(data)) {
        throw new Error('Data inválida');
    }
    return data.toISOString().split('T')[0];
}
