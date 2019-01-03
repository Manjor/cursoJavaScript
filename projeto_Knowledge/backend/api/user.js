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
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    //search user for ID
    const getById = (req,res) =>{
        app.db('users')
            .select('id','name','email','admin')
            .where({ id: req.params.id}).first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }


    return { save , get, getById }
}