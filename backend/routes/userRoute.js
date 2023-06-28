import express from "express"
import { createUser, login, logout, myDetails } from "../controllers/userController.js"
import { auth } from "../auth/auth.js"

const router = express.Router()

router.route("/register").post(createUser)
router.route("/login").post(login)
router.route("/logout").post(auth, logout)
router.route("/my/profile").get(auth, myDetails)

export default router