const moongose = require('mongoose')
moongose.connect(`mongodb://${process.env.MG_HOST}`, { useNewUrlParser: true} )
    .catch(e => {
        const msg = 'Não foi possível conectar com o MongoDB'
        console.log('\x1b[41m%s\x1b[37m',msg,'\x1b[0m')
    })