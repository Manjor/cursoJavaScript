//não aceita repeticao/não indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
