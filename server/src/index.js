const server = require("./app")
const PORT  = 3001 ;
const { conn } =  require("./db")




conn.sync({alter :  true}).then(async () => {
    server.listen(PORT, ()=> {
        console.log(`Listening at ${PORT}`)
    })
})