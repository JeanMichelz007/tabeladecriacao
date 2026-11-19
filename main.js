const corpoTabela = document.getElementById("corpoTabela")
const formulario = document.getElementById("formulario")

const celebridades = [
    {nome:"Fernanda Torres", atuacao:"Atriz", nacionalidade:"Brasil", idade:61},
    {nome:"Vini Jr", atuacao:"Jogador de Futebol", nacionalidade:"Brasil", idade:26},
    {nome:"Beyoncé", atuacao:"Cantora", nacionalidade:"EUA", idade:45},
    {nome:"Jackie Chan", atuacao:"Ator e Artista Marcial", nacionalidade:"China", idade:72},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (celebridade of celebridades){
        corpoTabela.innerHTML +=`
            <tr>
                <td>${celebridade.nome}</td>
                <td>${celebridade.atuacao}</td>
                <td>${celebridade.nacionalidade}</td>
                <td>${celebridade.idade}</td>
            </tr>
        `
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoNome").value
    const valorAtuacao = document.getElementById("campoAtuacao").value
    const valorNacionalidade = document.getElementById("campoNacionalidade").value
    const valorIdade = document.getElementById("campoIdade").value

    const x = {nome:valorNome, atuacao:valorAtuacao, nacionalidade:valorNacionalidade, idade:valorIdade}

    celebridades.push(x)

    exibir()

})