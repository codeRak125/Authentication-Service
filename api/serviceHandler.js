const _ = require("lodash");

const serviceHandler = (req, res, serviceP) => {
    serviceP.then( function (body){
        console.log(body);
        if(Array.isArray(body)){
            body = { data : body };
        } else {
            body = _.isEmpty( body ) ? { data : { }} : { data : body };
        }

        if(_.isPlainObject(body)){
            body.customCode = 200;
        }
        console.log(body);
        res.status(200).send(body);
    }).catch( function (err){
        console.log(err);
    });
    
}

module.exports = serviceHandler;