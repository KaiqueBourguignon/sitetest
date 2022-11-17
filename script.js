const  fotos = [
    'fotos/imagens/bb.jpg',
    'fotos/imagens/bbb.jpg',
    'fotos/imagens/bbbb.jpg',
    'fotos/imagens/bbbbb.jpg'
];

let fotoAtual = 0;

function pulo(){
    fotoAtual++;
    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    document.querySelector('#foto').src = fotos[fotoAtual];
}
