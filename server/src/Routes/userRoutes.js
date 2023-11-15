const { Router } = require("express");
const {postUser, getUser} = require("../controller/controllerUser")

const router = Router();

router.post("/save", postUser)
router.get("/showall", getUser)

module.exports = router