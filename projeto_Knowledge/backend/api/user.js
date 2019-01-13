const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrError, notExistsOrError,equalsOrError} = app.api.validation

    //function for encrypt password of the user
    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password,salt)
    }
    
    //insert user in database or update 
    const save = async (req,res)=>{
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id

        if(!req.originalUrl.startsWith('/users')) user.admin = false
        if(!req.user || !req.user.admin) user.admin = false

        try{
            existsOrError(user.name,'Nome não Informado.')
            existsOrError(user.email,'Email não Informado.')
            existsOrError(user.password,'Senha não Informado.')
            existsOrError(user.confirmPassword,'Confirmação de Senha Inválida.')
            existsOrError(user.password, user.confirmPassword, 'Senhas não conferem.')
            
            const userFromDB = await app.db('users')
                .where({ email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já Cadastrado.')
            }
        }catch(msg)
        {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)

        delete user.confirmPassword

        if(user.id){
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    //search all user of database
    const get = (req,res) =>{
        app.db('users')
            .select('id','name','email','admin')
                .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    //search user for ID
    const getById = (req,res) =>{
        app.db('users')
            .select('id','name','email','admin')
            .where({ id: req.params.id}).first()
            .whereNull('deletedAt')
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req,res) =>{
        try{
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles,'Usuário possui artigos')

            const rowsUpdated = await app.db('users')
                .update({ deletedAt: new Date()})
                .where({ id: req.params.id })
            existsOrError(rowsUpdated,'Usuário não foi encontrado.')
            res.status(204).send()
        }catch(msg){
            res.status(400).send(msg)
        }
    }


    return { save , get, getById, remove }
}