const express = require("express");
router = express.Router();
const serviceHandler = require("../serviceHandler");
const UserService = require("../services/UserService");

router.get("/", async (req, res) => {
    return serviceHandler(req, res, UserService.getUser());
});

router.post("/", async ( req, res ) => {
    return serviceHandler(req, res, UserService.addUser(req.body));
})



module.exports = router;