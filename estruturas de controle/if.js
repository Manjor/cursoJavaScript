function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVedade(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVedade()
seForVedade(null)
seForVedade(undefined)
seForVedade(NaN)
seForVedade('')
seForVedade(0)
seForVedade(-1)
seForVedade(' ')
seForVedade([])
seForVedade([1,2])
seForVedade({})
