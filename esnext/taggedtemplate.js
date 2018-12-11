// processar o templatedentro de uma funcao

function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const saudacao = 'Aprovado'
console.log(tag `${aluno} está ${saudacao}`)