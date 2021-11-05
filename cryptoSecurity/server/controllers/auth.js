const bcrypt = require('bcryptjs')


const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const authenticated = bcrypt.compareSync(password, users[i].password)
          console.log(authenticated)
          if(authenticated === true){
            let userToReturn = {...users[i]}
            delete userToReturn.password
            res.status(200).send(userToReturn)
            console.log(userToReturn)
          }
        }
        return
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {username, email, firstName, lastName, password} = req.body
        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(req.body.password, salt)

        console.log({salt})
        console.log({hash})

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          password: hash
        }

        users.push(newUser)
        let userToReturn = {...newUser}
        delete userToReturn.password
        res.status(200).send(userToReturn)
        console.log(userToReturn)
    }
}