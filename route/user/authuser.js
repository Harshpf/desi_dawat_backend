const express = require("express")
const {validateUser} = require("../../middleware/authmiddleware")
const {login,signup,test} = require("../../controller/user/authcontroller");

const router = express.Router();

router.post("/signup",signup);
router.get("/login",login);
router.get("/hii",test)

module.exports = router;