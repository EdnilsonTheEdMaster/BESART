# BESArt
Artigos artesanais de decoração em MDF e afins.

## Imagens dos produtos

Coloque ou remova arquivos de imagem dentro de `img/`. No deploy pelo branch do GitHub Pages, o Jekyll gera `img/imagens.json` automaticamente a partir dos arquivos presentes; a galeria é atualizada após a publicação. A prévia local usa os arquivos de fallback listados em `img/imagens.js`. Os nomes devem respeitar maiúsculas e minúsculas.

As medidas exibidas no painel são obtidas dos produtos cadastrados. Selecione uma medida existente ou escolha “Cadastrar nova medida...” para adicionar outra.

## Armazenamento

O painel salva os produtos no `localStorage` do navegador atual. Como o GitHub Pages é estático, alterações feitas no painel não são publicadas para outros visitantes nem sincronizadas entre dispositivos.
