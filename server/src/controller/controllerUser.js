const {user} = require("../db")
const { validationRegister } = require("../validation/user")

const postUser = async (req, res) =>{

    try {
        const {name, lastName, iN} =  req.body
        console.log(name, lastName, iN);

        const confirm  = validationRegister(name, lastName, iN);
        console.log(confirm)
        if(!confirm) throw Error("The info is wrong")

        const findUser = await user.findOne({
            where:{
                identificationNumber: iN
            }
        })
        if(findUser){
            throw Error("The indentification number already exist")
        }

        const createUser = await user.create({
            name,
            lastName,
            identificationNumber: iN
        })

        if(createUser){
            return res.status(200).json(createUser)
        }
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
   
}

const getUser = async (req, res) => {
    try {
        const users = await user.findAll()
        const userList = users.map((user) => {
            return ({
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                iN: user.identificationNumber
            })
        } )
        return res.status(200).json(userList)
    } catch (error) {
        return res.status(400).send(error.message)
    }

}
 
module.exports = {
    postUser,
    getUser
}