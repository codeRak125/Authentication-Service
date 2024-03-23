const jwt = require("jsonwebtoken");
const config = require("config");
const jwt_key = config.get("jwt");
const authenticateUser = ( req, res, next ) => {
    try {
        const token = req.headers.authorization.trim().split(' ')[0];

        const decodedToken = jwt.verify(token, jwt_key.secretkey);
        
        req.userId = decodedToken.userId;

        next();

    } catch (error) {
        console.log("Error in authentication user", error);
        res.status(401).json( "Unauthorized" );
    }
}

module.exports = authenticateUser;