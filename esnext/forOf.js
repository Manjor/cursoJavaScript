for (let letras of 'Coder'){
    console.log(letras)
}

const assuntoEcma = ['Map','Set','Promise']

for (let i in assuntoEcma){
    console.log(i)
}

for(let assunto of assuntoEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map',{obordado: true}],
    ['Set',{obordado:true}],
    ['Promise',{obordado:false}]
])

for (let assunto of assuntoMap){
    console.log(assunto)
}

for(let chave of assuntoMap.keys()){
    console.log(chave)
}

for (let ass of assuntoMap.values()){
    console.log(ass)
}
for(let [ch,vl] of assuntoMap.entries()){
    console.log(ch,vl)
}

const s = new Set('a','b','c')

for(let letra of s){
    console.log(letra)
}
