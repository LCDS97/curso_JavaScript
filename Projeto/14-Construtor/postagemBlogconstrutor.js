function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false

}

let postagem = new Postagem(
    'titulo',
    'mensagem',
    'lucas',
    visualizacoes = 1000,
    comentarios = ['Comentario 1', 'Comentario 2'],
    estaAoVivo = true
)

console.log(postagem)