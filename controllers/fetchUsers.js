const User = require("../models/user");

module.exports = async function(req, res, next){
    let users = await User.find()

    res.json(users)
}
