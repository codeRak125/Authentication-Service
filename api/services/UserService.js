const USER_MODEL = require("../../db/models/user");
const _ = require("lodash");

class UserService {

    async getUser(query) {
        try {
            const data = await USER_MODEL.find({query});
            if(_.isEmpty(data)){
                return Promise.reject({ status : 404, message: `user not found`});
            }
            console.log("**", data);
            return data;
        } catch (error) {
            console.log("Could not find the user : ", error);
        }
    }

    async addUser(user) {
        try {
            console.log(user);
            const data = await USER_MODEL.create({ name: user.name, email : user.email, password : user.password});
            return data;
        } catch (error) {
            return console.log("Error in creating a new user : ", error);
        }
    }
}

module.exports = new UserService();