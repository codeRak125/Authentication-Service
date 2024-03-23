const jwt = require("jsonwebtoken");
const config = require("config");

const USER_MODEL = require("../../db/models/user");
const jwt_config = config.get("jwt");


class LoginService {

    async login(credentials){
        const { userName, email, password } = credentials;
        const user = USER_MODEL.findOne({ userName: userName, email: email})

        // ?? compare encrypted password 

        //

        // assign jwt token
        const token = jwt.sign({ userId: user._id, email: user.email }, jwt_config.secretkey);
        return { token };
    }
};

module.exports = new LoginService();