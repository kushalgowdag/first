import app from "./app.js"
import { dbConnection } from "./database/db.js"


dbConnection()

app.listen(process.env.PORT, () => {
    console.log(`Running on Port: ${process.env.PORT}!`)
})