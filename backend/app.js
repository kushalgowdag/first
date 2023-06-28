import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"


const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())
app.use(helmet())
app.use(morgan("common"))

app.use("/", userRouter)
app.use("/", productRouter)

export default app