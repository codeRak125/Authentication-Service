const express = require("express");
const router = express.Router();

const LoginService = require("../services/LoginService");

const serviceHandler = require("../../utils/serviceHandler");


router.post('/', async(req, res) => {
    const data = await LoginService.login( req.body );
    res.status(200).send(data);
});


module.exports = router;