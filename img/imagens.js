window.IMAGENS_PRODUTO = [
    'guirlandaafro.jpg',
    'portacopas1.jpg',
    'produto-padrao.svg'
];

window.IMAGENS_PROMISE = fetch('./img/imagens.json')
    .then(resposta => {
        if (!resposta.ok) throw new Error('Manifesto de imagens indisponível.');
        return resposta.json();
    })
    .then(imagens => {
        if (!Array.isArray(imagens) || imagens.length === 0) {
            throw new Error('Manifesto de imagens inválido.');
        }
        window.IMAGENS_PRODUTO = imagens.filter(nome =>
            typeof nome === 'string' && nome && !/[\\/]|\.\./.test(nome)
        );
        return window.IMAGENS_PRODUTO;
    })
    .catch(() => window.IMAGENS_PRODUTO);
