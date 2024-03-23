const express = require("express");
router = express.Router();
const serviceHandler = require("../../utils/serviceHandler");
const UserService = require("../services/UserService");

router.get("/", async (req, res) => {
    return serviceHandler(req, res, UserService.getUser());
    // res.status(200).send("this fking works ");
});

router.post("/", async ( req, res ) => {
    return serviceHandler(req, res, UserService.register(req.body));
})



module.exports = router;