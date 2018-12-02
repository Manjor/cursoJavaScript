const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

//uma função callback de um forEach rece até 3 parametros
//sendo eles, 0-nome, 1-indice, 2-array
aprovados.forEach(function(nome,indice,array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach((nome) =>console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)